import React from 'react'
import MyLogo from './img/myLogo.jpg'
import { Linktree } from './components/atoms/Linktree'
import { Link } from './components/Link'

function App () {
  return (
    <main className="grid justify-center h-screen py-6 px-1">
      <header className="row-span-1 flex flex-col gap-3 items-center">
        <img src={MyLogo} alt="perfil" className="w-24 h-24 rounded-full" />
        <h2 className="font-medium text-lg text-center">Luis Romero, Lima Perú, @senixcode</h2>
        <p>Developer Full Stack, Especializándome como Frontend Developer.</p>
      </header>
      <section className="row-span-5 flex flex-col gap-3 items-center">
          <Link
            href="https://www.senixcode.dev"
            className="btn-link"
            children="Mi web"
          />
        <div className="flex gap-4">
          <Link
            href="https://github.com/senixcode"
            children={<i className="uil uil-github icon"/>}
          />
          <Link
            href="https://www.linkedin.com/in/luis-romero-jimenez-developer-full-stack/"
            children={ <i className="uil uil-linkedin icon"></i>}
          />
          <Link
            href="https://twitter.com/senixcode"
            children={ <i className="uil uil-twitter icon"></i>}
          />
          <Link
            href="https://www.instagram.com/senixcode/"
            children={ <i className="uil uil-instagram-alt icon"></i>}
          />
        </div>
      </section>
      <footer>
        <Linktree/>
      </footer>
    </main>
  )
}

export default App
