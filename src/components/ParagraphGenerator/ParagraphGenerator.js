import { Container } from "@mui/system";
import { cloneElement, forwardRef, useMemo, useCallback, useRef } from "react";
import FadeIn from "react-fade-in";
import useVisibility from "../../hooks/useVisibility";
import "./ParagraphGenerator.scss";
import useAnimation from "../../hooks/useAnimation";
import { useSearchParams } from "react-router-dom";
import { nanoid as nnd } from "nanoid";
const nanoid = () => nnd(6);

const excluededHtmlTags = ["br"];

export const createIdPath = (id) => `?paragraphId=${id}`;

const Paragraph = ({
  children,
  id: _id,
  highlightDelay = 800,
  highlightDuration = 800,
}) => {
  const paramRef = useRef();
  const [params, setParams] = useSearchParams();

  const needsToBeHighlighted = useMemo(() => {
    // checks if id is specified in query params to highlight the paragraph
    const paramsId = params.get("paragraphId");
    const childrenPropsId = children?.props?.id;
    return paramsId === _id || paramsId === childrenPropsId;
  }, [params, _id, children?.props?.id]);

  useAnimation({
    condition: needsToBeHighlighted,
    animations: "highlight-paragraph",
    element: paramRef,
    repeat: 3,
    time: highlightDuration,
    initTimeout: highlightDelay,
    callback: () => setParams({}, { replace: true }), // clears id from query parameters
  });

  const childToShow = useMemo(() => {
    let _children = children;
    if (excluededHtmlTags.includes(children?.type)) {
      return null;
    }
    if (typeof _children === "object" && !_children?.hasOwnProperty("type")) {
      return null;
    }
    let className = "Paragraph";
    let id = _id;
    if (Boolean(_children?.props?.className)) {
      className = className.concat(` ${_children.props.className}`);
    }
    if (Boolean(_children?.props?.id)) {
      // if _children contains th id prop, the automatically generated id will be replace with the specified one
      id = _children?.props?.id;
    }
    /* if (needsToBeHighlighted) {
      className = className.concat(" highlight-paragraph");
    } */
    if (typeof _children === "function") {
      _children = _children({ id, className });
    }
    if (
      typeof _children?.type === "string" ||
      typeof _children?.type === "object" ||
      typeof _children?.type === "function"
    ) {
      return cloneElement(_children, {
        ..._children.props,
        className,
        id,
        ref: paramRef,
      });
    } else {
      return (
        <p className={className} id={id} ref={paramRef}>
          {_children}
        </p>
      );
    }
  }, [children, _id]);

  return childToShow;
};

const ParagraphGeneratorComp = (
  {
    children,
    className,
    containerClassName,
    show = true,
    fatherRef = null,
    visible = true,
    style = {},
    duration = 600,
    paragraphsProps = {},
    visibilityOptions,
    as = "div",
  },
  forwardedRef
) => {
  const { isVisible, ref } = useVisibility({
    stopOnDetection: true,
    childRef: forwardedRef,
    fatherRef,
    options: {
      threshold: visibilityOptions?.threshold || [0.8, 0.2],
      ratio: visibilityOptions?.ratio || 0.2,
    },
  });

  const mapChildren = useCallback(
    (c, paragraphsProps, j) =>
      c
        .map((p, i) => {
          const id = `Paragraph${j ? `-${j}` : ""}-${i}`;
          const _id = nanoid();
          if (Array.isArray(p)) {
            return mapChildren(p, paragraphsProps, j ? `${j}-${i}` : i); // generates a new nested key for the elements
          } else {
            return (
              <Paragraph key={`${_id}-${id}`} id={id} {...paragraphsProps}>
                {p}
              </Paragraph>
            );
          }
        })
        .flat(),
    []
  );

  return (
    <Container
      className={containerClassName ? containerClassName : undefined}
      sx={style}
      ref={forwardedRef ? forwardedRef : ref}
    >
      <FadeIn
        visible={visible && isVisible && show}
        delay={100}
        transitionDuration={duration}
        className={
          className ? `ParagraphGenerator ${className}` : "ParagraphGenerator"
        }
        childClassName="Paragraph__wrapper"
        wrapperTag={as}
      >
        {Array.isArray(children) ? (
          mapChildren(children, paragraphsProps)
        ) : (
          <Paragraph {...paragraphsProps}>{children}</Paragraph>
        )}
      </FadeIn>
    </Container>
  );
};

ParagraphGeneratorComp.displayName = "ParagraphGenerator";

const ParagraphGenerator = forwardRef(ParagraphGeneratorComp);

export default ParagraphGenerator;
