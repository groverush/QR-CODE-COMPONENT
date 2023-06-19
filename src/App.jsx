import qrImage from "./assets/image-qr-code.png"
const App = () => {
  return (
    <div className="flex flex-col justify-between h-screen w-screen">
      <section className="max-w-[380px] mx-auto mt-20 rounded-xl bg-white p-5 pb-7">
        <picture>
          <img src={qrImage} alt="qr-image" className="rounded-xl" />
        </picture>
        <div className="mt-4 text-center">
          <h3 className="font-bold text-2xl">
            Improve your front-end <br />
            skills by building projects
          </h3>

          <p className="text-gray-400 text-enter px-2 mt-5 text-lg tracking-wide leading-tight">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </section>

      <footer className="text-center text-base">
        Challenge by{" "}
        <a
          className="text-sky-400 font-semibold"
          href="https://www.frontendmentor.io/home"
          target="_blank"
        >
          Frontend Mentor.
        </a>
        <br className="sm:hidden" />
        Coded by
        <a
          className="text-sky-400 font-semibold"
          href="https://app.netlify.com/teams/groverush/overview"
          target="_blank"
        >
          Julian Monroy.
        </a>
      </footer>
    </div>
  )
}
export default App
