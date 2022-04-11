import * as component from "../components";
export default function DefaultLayout(props) {
  return (
    <div>
      <component.Navbar />
      <main className="min-h-screen">{props.children}</main>
    </div>
  );
}
