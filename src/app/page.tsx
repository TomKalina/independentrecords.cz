import { text } from "stream/consumers"

export default function Home() {
  return (
    <html>
      <head>
        <title>independentrecords.cz</title>
        <link rel="shortcut icon" href="app/favicon.ico"></link>
      </head>
      <body class="font-mono bg-origin-content p-6 mr-4">
        <header>
          <nav class="flex items-center justify-between flex-wrap p-6 bg-gray-800">
            <div class="flex items-center flex-shrink-0 m-6">
              <span class="font-semibold text-2xl tracking-tight font-mono bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500">independentrecords.cz</span>
            </div>
            <div class="block lg:hidden">
              <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg class="fill-current h-3 w-3" viewBox="0 0 20 20"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
              </button>
            </div>
            <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
              <div class="text-sm lg:flex-grow">
                <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0  text-red-700 hover:text-white tracking-wide mr-4 font-semibold">Náš příběh</a>
                <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0  text-white hover:text-red-700 tracking-wide mr-4 font-semibold">Nahrávky</a>
                <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0  text-white hover:text-red-700 tracking-wide mr-4 font-semibold">Rezervační systém</a>
                <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0  text-white hover:text-red-700 tracking-wide mr-4 font-semibold">Kontakt</a>
              </div>
              <div>
                <img src=""></img>
                <a href="#"></a>
              </div>
            </div>
          </nav>
        </header>
        <article class="bg-gray-700 text-red-100 text-center bg-origin-content p-6 m-4">
          <header>
            <h1 class="font-semibold text-center text-red-100 text-xl tracking-wide">Náš příběh</h1>
          </header>
          <section>
            <p>bla bla bla bla bla bla bla bla bla la bla bla bla bla bla bla bla bla la bla bla bla bla bla bla bla bla la bla bla bla bla bla bla bla bla</p>
          </section>
        </article>
        <article class="bg-gray-700 text-red-100 text-center bg-origin-content p-6 m-4">
          <header>
           <h1 class="font-semibold text-center text-red-100 text-xl tracking-wide">Nahrávky</h1>
          </header> 
          <section>
            <p>bla bla bla bla bla bla bla bla bla bla bla bla bla bl bla bla bla bla bla bla bl bla bla bla bla bla bla bl bla bla bla bla bla bla blbla bla bla bla bla bla bl bla bla bla bla bla bla bl bla bla bla bla bla bla bl bla bla bla bla bla bla bl bla bla bla bla bla bla bl</p>
          </section>
        </article>
        <article class="bg-gray-700 text-red-100 bg-origin-content p-6 m-4">
          <header>
            <h1 class="font-semibold text-center text-red-100 text-xl tracking-wide">Rezervační systém</h1>
          </header>  
          <section>
            <p> bla bla bla bla bla bla bla bla bla bla bla bl bla bla bla bla bla blbla bla bla bla bla blbla bla bla bla bla blbla bla bla bla bla blbla bla bla bla bla blbla bla bla bla bla bl bla bla bla bla bla bl bla bla bla bla bla bl bla bla bla bla bla bl bla bla bla bla bla bl bla bla bla bla bla bl </p>
          </section>
        </article>
        <article class="bg-gray-700 text-red-100 bg-origin-content p-6 m-4">
          <header>
            <h1 class="font-semibold text-center text-red-100 text-xl tracking-wide">Kontakt</h1>
          </header>
          <section class="text-center">
            <div class="flex justify-between">
              <div>
                <p>Kde nás najdete?</p>
                <p>Skalka 1858</p>
                <p>Česká Třebová</p> 
                <p>560 02</p>
            </div>
            <div>
                Otevírací doba
            </div>
            </div>
          </section>
        </article>

      </body>
    </html>
  );
}
