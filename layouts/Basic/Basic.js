import Header from "../../components/Header/Header";

export default function Basic(props) {
  const { children } = props;
  return (
    <>
      <Header />
      <div className="container py-4">{children}</div>
    </>
  );
}
