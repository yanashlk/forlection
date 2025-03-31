import Header from "./components/Header/page";

export default function Home() {
  console.log(process.env.ENV_WELCOME)
  return (
    <Header/>
    // <p>{process.env.NEXT_PUBLIC_HEADER_WELCOME}</p>
  );
}
