import React from 'react'

const title = 'REST DELETE'
const category = 'restApiCommands'
const content = (
  <React.Fragment>
    <p>
      Use <code>:DELETE</code> to send HTTP DELETE to Neo4j's REST interface.
    </p>
    <table className='table-condensed table-help'>
      <tbody>
        {/* <tr>
        <th>Reference:</th>
        <td><code><a href='{{ neo4j.version | neo4jDeveloperDoc }}/#http-api-index'>REST</a></code></td>
      </tr> */}
        <tr>
          <th>Related:</th>
          <td>
            <a help-topic='rest-get'>:help REST GET</a>
            <a help-topic='rest-post'>:help REST POST</a>
            <a help-topic='rest-put'>:help REST PUT</a>
          </td>
        </tr>
      </tbody>
    </table>
    <section className='example'>
      <figure>
        <pre mode='rest' className='code runnable'>
          :DELETE /db/data/transaction/2
        </pre>
        <figcaption>Rollback an open transaction.</figcaption>
      </figure>
    </section>
  </React.Fragment>
)

export default { title, category, content }
