import { useMemo } from "react";
import CodeShower from "../../CodeShower";
import DetailExpandItem from "./DetailExpandItem";
import "./styles/DetailCodeSampleFile.scss";

const baseLangPath = "Pages.Detail.DetailCodeSampleFile";

const DetailCodeSampleFile = ({ data }) => {
  const text_file = useMemo(() => data.text_file, [data]);

  const child = useMemo(() => {
    switch (typeof text_file) {
      case "string": {
        return (
          <DetailExpandItem
            className="DetailCodeSampleFile"
            baseLangPath={baseLangPath}
          >
            <div id="code-sample-files">
              <CodeShower file={text_file} />
            </div>
          </DetailExpandItem>
        );
      }
      default: {
        if (Array.isArray(text_file)) {
          return (
            <DetailExpandItem
              className="DetailCodeSampleFile"
              baseLangPath={`${baseLangPath}.multi`}
            >
              <div
                id="code-sample-files"
                className="DetailCodeSampleFile__multi"
              >
                {text_file.map((file) => (
                  <DetailExpandItem key={file.id} languageTextProp={file.text}>
                    <CodeShower file={file.file} />
                  </DetailExpandItem>
                ))}
              </div>
            </DetailExpandItem>
          );
        } else {
          return null;
        }
      }
    }
  }, [text_file]);

  return child;
};

export default DetailCodeSampleFile;
