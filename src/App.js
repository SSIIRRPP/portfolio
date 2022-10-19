import { useEffect } from "react";
import { lazy, Suspense, useRef } from "react";
import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Sidebar from "react-sidebar";
import ErrorBoundary from "./components/ErrorBoundary";
import Fallback from "./components/Fallback";
import Header from "./components/Header/Header";
import SideBar from "./components/Header/SideBar";
import Layout from "./components/Layout";
import codeSamples from "./data/code-samples";
import courses from "./data/courses";
import projects from "./data/projects";

const Main = lazy(() => import("./pages/Main"));
const Detail = lazy(() => import("./pages/Detail"));
const CardsList = lazy(() => import("./pages/CardsList"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  const mainRef = useRef(null);
  const [openSidebar, setOpenSidebar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const elm = document.getElementsByTagName("body")[0];
    if (location.pathname.startsWith("/contact")) {
      !elm.classList.replace("hide-recaptcha", "show-recaptcha") &&
        elm.classList.add("show-recaptcha");
    } else {
      !elm.classList.replace("show-recaptcha", "hide-recaptcha") &&
        elm.classList.add("hide-recaptcha");
    }
  }, [location.pathname]);

  return (
    <>
      <Header setOpenSidebar={setOpenSidebar} />
      <main ref={mainRef}>
        <Sidebar
          open={openSidebar}
          sidebar={
            <SideBar
              openSidebar={openSidebar}
              setOpenSidebar={setOpenSidebar}
            />
          }
          contentId="content" // used to scroll
          onSetOpen={setOpenSidebar}
          styles={{
            root: {
              top: "100px",
              height: "calc(100vh - 100px)",
            },
            sidebar: {
              zIndex: 3,
              width: "300px",
              display: "flex",
              justifyContent: "center",
              overflow: "hidden",
            },
            overlay: {
              top: "100px",
              height: "calc(100vh - 100px)",
            },
          }}
        >
          <div className="Header__after" />
          <Layout mainRef={mainRef}>
            <ErrorBoundary>
              <Suspense fallback={<Fallback />}>
                <Routes>
                  <Route index element={<Main />} />
                  <Route path="/projects">
                    <Route
                      index
                      element={
                        <CardsList
                          elements={projects}
                          langPath="Pages.Projects"
                        />
                      }
                    />
                    {projects.map((p) => (
                      <Route
                        key={p.id}
                        path={p.id}
                        element={<Detail type="project" data={p} />}
                      />
                    ))}
                    <Route path="*" element={<NotFound type="project" />} />
                  </Route>
                  <Route path="/education">
                    <Route
                      index
                      element={
                        <CardsList
                          elements={courses}
                          langPath="Pages.Education"
                        />
                      }
                    />
                    {courses.map((c) => (
                      <Route
                        key={c.id}
                        path={c.id}
                        element={<Detail data={c} type="course" />}
                      />
                    ))}
                    <Route path="*" element={<NotFound type="course" />} />
                  </Route>
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/code-samples">
                    <Route
                      index
                      element={
                        <CardsList
                          elements={codeSamples}
                          langPath="Pages.CodeSamples"
                        />
                      }
                    />
                    {codeSamples.map((s) => (
                      <Route
                        key={s.id}
                        path={s.id}
                        element={<Detail data={s} type="code" />}
                      />
                    ))}
                    <Route path="*" element={<NotFound type="code" />} />
                  </Route>
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </ErrorBoundary>
          </Layout>
        </Sidebar>
      </main>
    </>
  );
};

export default App;
