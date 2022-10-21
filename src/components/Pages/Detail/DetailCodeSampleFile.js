import CodeShower from "../../CodeShower";
import DetailExpandItem from "./DetailExpandItem";
import "./styles/DetailCodeSampleFile.scss";

const baseLangPath = "Pages.Detail.DetailCodeSampleFile";

const DetailCodeSampleFile = ({ data }) => {
  return (
    <DetailExpandItem baseLangPath={baseLangPath}>
      <CodeShower file={data.text_file} />
    </DetailExpandItem>
  );
};

export default DetailCodeSampleFile;
