/*
 * Copyright (c) "Neo4j"
 * Neo4j Sweden AB [http://neo4j.com]
 *
 * This file is part of Neo4j.
 *
 * Neo4j is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

import React from 'react'
import ManualLink from 'browser-components/ManualLink'
import { SidebarSlide } from '../../modules/Carousel/Slide'

const title = 'Cypher'
const slides = [
  <SidebarSlide key="first">
    <p className="lead">Neo4j's graph query language</p>
    <p>Neo4j's Cypher language is purpose built for working with graph data.</p>
    <ul className="big">
      <li>uses patterns to describe graph data</li>
      <li>familiar SQL-like clauses</li>
      <li>declarative, describing what to find, not how to find it</li>
    </ul>
  </SidebarSlide>,
  <SidebarSlide key="second">
    <h3>CREATE</h3>
    <p className="lead">Create a node</p>
    <p>Let's use Cypher to generate a small social graph.</p>
    <pre className="pre-scrollable code runnable">
      {'CREATE (ee:Person { name: "Emil", from: "Sweden", klout: 99 })'}
    </pre>
    <ul>
      <li>
        <code>CREATE</code> clause to create data
      </li>
      <li>
        <code>()</code> parenthesis to indicate a node
      </li>
      <li>
        <code>ee:Person</code> a variable 'ee' and label 'Person' for the new
        node
      </li>
      <li>
        <code>{'{}'}</code> brackets to add properties to the node
      </li>
    </ul>
  </SidebarSlide>,
  <SidebarSlide key="third">
    <h3>MATCH</h3>
    <p className="lead">Finding nodes</p>
    <p>Now find the node representing Emil:</p>
    <pre className="pre-scrollable code runnable">
      MATCH (ee:Person) WHERE ee.name = "Emil" RETURN ee;
    </pre>
    <ul>
      <li>
        <code>MATCH</code> clause to specify a pattern of nodes and
        relationships
      </li>
      <li>
        <code>(ee:Person)</code> a single node pattern with label 'Person' which
        will assign matches to the variable 'ee'
      </li>
      <li>
        <code>WHERE</code> clause to constrain the results
      </li>
      <li>
        <code>ee.name = "Emil"</code> compares name property to the value "Emil"
      </li>
      <li>
        <code>RETURN</code> clause used to request particular results
      </li>
    </ul>
  </SidebarSlide>,
  <SidebarSlide key="forth">
    <h3>CREATE more</h3>
    <p className="lead">Nodes and relationships</p>
    <p>
      <code>CREATE</code>
      clauses can create many nodes and relationships at once.
    </p>
    <pre className="pre-scrollable code runnable">
      {`MATCH (ee:Person) WHERE ee.name = "Emil"
CREATE (js:Person { name: "Johan", from: "Sweden", learn: "surfing" }),
(ir:Person { name: "Ian", from: "England", title: "author" }),
(rvb:Person { name: "Rik", from: "Belgium", pet: "Orval" }),
(ally:Person { name: "Allison", from: "California", hobby: "surfing" }),
(ee)-[:KNOWS {since: 2001}]->(js),(ee)-[:KNOWS {rating: 5}]->(ir),
(js)-[:KNOWS]->(ir),(js)-[:KNOWS]->(rvb),
(ir)-[:KNOWS]->(js),(ir)-[:KNOWS]->(ally),
(rvb)-[:KNOWS]->(ally)`}
    </pre>
  </SidebarSlide>,
  <SidebarSlide key="fifth">
    <h3>Pattern matching</h3>
    <p className="lead">Describe what to find in the graph</p>
    <p className="summary">
      For instance, a pattern can be used to find Emil's friends:
    </p>
    <pre className="pre-scrollable code runnable">
      {`MATCH (ee:Person)-[:KNOWS]-(friends)
WHERE ee.name = "Emil" RETURN ee, friends`}
    </pre>
    <ul>
      <li>
        <code>MATCH</code>
        clause to describe the pattern from known Nodes to found Nodes
      </li>
      <li>
        <code>(ee)</code>
        starts the pattern with a Person (qualified by WHERE)
      </li>
      <li>
        <code>-[:KNOWS]-</code>
        matches "KNOWS" relationships (in either direction)
      </li>
      <li>
        <code>(friends)</code>
        will be bound to Emil's friends
      </li>
    </ul>
  </SidebarSlide>,
  <SidebarSlide key="sixth">
    <h3>Recommend</h3>
    <p className="lead">Using patterns</p>
    <p className="summary">
      Pattern matching can be used to make recommendations. Johan is learning to
      surf, so he may want to find a new friend who already does:
    </p>
    <pre className="pre-scrollable code runnable">
      {`MATCH (js:Person)-[:KNOWS]-()-[:KNOWS]-(surfer)
WHERE js.name = "Johan" AND surfer.hobby = "surfing"
RETURN DISTINCT surfer`}
    </pre>
    <ul>
      <li>
        <code>()</code>
        empty parenthesis to ignore these nodes
      </li>
      <li>
        <code>DISTINCT</code>
        because more than one path will match the pattern
      </li>
      <li>
        <code>surfer</code>
        will contain Allison, a friend of a friend who surfs
      </li>
    </ul>
  </SidebarSlide>,
  <SidebarSlide key="seventh">
    <h3>Analyze</h3>
    <p className="lead">Using the visual query plan</p>
    <p className="summary">
      Understand how your query works by prepending <code>EXPLAIN</code> or{' '}
      <code>PROFILE</code>:
    </p>
    <pre className="pre-scrollable code runnable">
      {`PROFILE MATCH (js:Person)-[:KNOWS]-()-[:KNOWS]-(surfer)
WHERE js.name = "Johan" AND surfer.hobby = "surfing"
RETURN DISTINCT surfer`}
    </pre>
  </SidebarSlide>,
  <SidebarSlide key="eighth">
    <h3>Live Cypher warnings</h3>
    <p className="lead">Identify query problems in real time</p>
    <p>
      As you type, the query editor notifies you about deprecated features and
      potentially expensive queries.
    </p>
    <img
      src="./assets/images/screen_cypher_warn.png"
      className="img-responsive"
    />
  </SidebarSlide>,
  <SidebarSlide key="nineth">
    <h3>Next steps</h3>
    <p>
      Start your application using Cypher to create and query graph data. See{' '}
      <a help-topic="cypher">Help Cypher</a> for more built-in cypher
      documentation.
    </p>
    <h3>Documentation</h3>
    <ul className="undecorated">
      <li>
        <ManualLink chapter="cypher-refcard" page="/">
          Cypher Refcard
        </ManualLink>
      </li>
      <li>
        <ManualLink chapter="cypher-manual" page="/">
          The Cypher chapter
        </ManualLink>{' '}
        of the Neo4j Developer Manual
      </li>
    </ul>
  </SidebarSlide>
]

export default { title, slides }
