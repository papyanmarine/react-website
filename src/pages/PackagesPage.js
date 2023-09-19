import PackagesList from "../components/Packages/PackagesList";

const PackagesPage = (props) => {

  return (
    <div className="packages-page">
      <PackagesList packages={props.packages}/>
    </div>
  );

}
export default PackagesPage;