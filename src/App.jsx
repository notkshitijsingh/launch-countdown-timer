import CountdownSection from "./components/CountdownSection";
import SocialLinks from "./components/SocialLinks";

export default function App() {
  return (
    <>
      <div className="flex flex-col w-full min-h-screen max-w-screen-md mx-auto p-8">
        <div className="flex flex-col justify-between flex-1">
          <header>
            <h1 className="text-3xl text-center tracking-[0.2em] font-bold uppercase py-16">
              We're launching soon
            </h1>
          </header>
          <main className="flex-1">
            <CountdownSection />
          </main>
          <footer>
            <SocialLinks />
          </footer>
        </div>
      </div>
    </>
  );
}
