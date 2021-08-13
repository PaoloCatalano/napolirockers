import React from "react"
import Layout from "../components/Layout"
import Title from "../components/Title"

export default function Home() {
  return (
    <Layout>
      <article>
        <Title title="We are what we do!" />

        <p>
          Napoli Rockers is a musical collective born in 2010 from a group of
          young Neapolitan musicians, united in order to share their deep love
          for Reggae music together with its true message: bring voice to those
          who have never had it, and claim unity, peace and justice.
        </p>
        <p>
          The band identifies its main influence in the Roots Rockers tradition:
          through a hard work of study and musical research, the band made
          itself capable to share stages and recording sessions with producers
          and personalities of reggae music worldwide.
        </p>
      </article>
      <article>
        <p>
          Napoli Rockers è un collettivo musicale che nasce nel 2010
          dall’incontro di giovani musicisti campani, uniti dall’amore per la
          musica giamaicana e dalla necessità di portare avanti il messaggio
          proprio della Reggae music: dare voce a chi non l’ha mai avuta,
          rivendicando uguaglianza, pace e giustizia.
        </p>
        <p>
          Fin dal momento della sua formazione la band si riconosce nella
          tradizione musicale Roots Rockers, e svolge su questa un intenso
          lavoro di studio e ricerca musicale. Ha condiviso, su questo terreno
          comune, palchi e session di registrazione con produttori e personalità
          internazionali della musica reggae.
        </p>
      </article>
    </Layout>
  )
}
