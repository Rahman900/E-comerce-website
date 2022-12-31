import Head from "next/head";
import styles from "../styles/Home.module.css";
import Script from "next/script";
import Header from "../components/Header.js";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossorigin="anonymous"
        />
      </Head>
      <Header></Header>
      <div className="container-bg">
  <img src="https://img.freepik.com/premium-photo/woman-works-office-blue-background-concept-workspace-working-computer-freelance-banner_164357-1144.jpg?w=2000" alt="Banner" style={{width:"100%"}}/>
  <h1 className="centered-element text-black">Welcome to My Blog</h1>
</div>
      <section className="my-5 border container">
      <ul className="nav nav-tabs card-header-tabs">
      <li className="nav-item">
        <Link className="nav-link active" aria-current="true" href="#">Your Feed</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="#">Global Feed</Link>
      </li>
    </ul>
      <div className="card my-2 w-100" >
  <div className="card-body">
    <h5 className="card-title">Blog Title</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" className="btn btn-primary">See Full Blog</a>
  </div>
</div>

<div className="card my-2 w-100" >
  <div className="card-body">
    <h5 className="card-title">Blog Title</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" className="btn btn-primary">See Full Blog</a>
  </div>
</div>

<div className="card my-2 w-100" >
  <div className="card-body">
    <h5 className="card-title">Blog Title</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" className="btn btn-primary">See Full Blog</a>
  </div>
</div>
      </section>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossOrigin="anonymous"/>
    <style jsx>
      {
        `
        .container-bg {
          position: relative;
          text-align: center;
          color: white;
        }
        .centered-element {
          position: absolute;
          top: 15%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        `
      }
    </style>
    </>
  );
}
