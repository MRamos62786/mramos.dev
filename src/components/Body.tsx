import './Body.css';
import { Card, Elevation } from "@blueprintjs/core";

const mySkill = (props: { header: string, content: string }) => (
  <Card elevation={Elevation.TWO}>
    <h5><a href="#/">{props.header}</a></h5>
    <p>{props.content}</p>
  </Card>
);

export const Body = () => {
  return (
    <main >
      <Card className='Body' interactive={true} elevation={Elevation.ZERO}>
        <table className="bp4-html-table ">
          <thead>
            <tr>
              <th>Project</th>
              <th>Description</th>
              <th>Technologies</th>
              <th>Contributors</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Blueprint</td>
              <td>CSS framework and UI toolkit</td>
              <td>Sass, TypeScript, React</td>
              <td>268</td>
            </tr>
            <tr>
              <td>TSLint</td>
              <td>Static analysis linter for TypeScript</td>
              <td>TypeScript</td>
              <td>403</td>
            </tr>
            <tr>
              <td>Plottable</td>
              <td>Composable charting library built on top of D3</td>
              <td>SVG, TypeScript, D3</td>
              <td>737</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Total</td>
              <td>1408</td>
            </tr>
          </tfoot>
        </table>
        <table className="bp4-html-table ">
          <thead>
            <tr>
              <th>Project</th>
              <th>Description</th>
              <th>Technologies</th>
              <th>Contributors</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Blueprint</td>
              <td>CSS framework and UI toolkit</td>
              <td>Sass, TypeScript, React</td>
              <td>268</td>
            </tr>
            <tr>
              <td>TSLint</td>
              <td>Static analysis linter for TypeScript</td>
              <td>TypeScript</td>
              <td>403</td>
            </tr>
            <tr>
              <td>Plottable</td>
              <td>Composable charting library built on top of D3</td>
              <td>SVG, TypeScript, D3</td>
              <td>737</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Total</td>
              <td>1408</td>
            </tr>
          </tfoot>
        </table>
        <table className="bp4-html-table ">
          <thead>
            <tr>
              <th>Project</th>
              <th>Description</th>
              <th>Technologies</th>
              <th>Contributors</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Blueprint</td>
              <td>CSS framework and UI toolkit</td>
              <td>Sass, TypeScript, React</td>
              <td>268</td>
            </tr>
            <tr>
              <td>TSLint</td>
              <td>Static analysis linter for TypeScript</td>
              <td>TypeScript</td>
              <td>403</td>
            </tr>
            <tr>
              <td>Plottable</td>
              <td>Composable charting library built on top of D3</td>
              <td>SVG, TypeScript, D3</td>
              <td>737</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Total</td>
              <td>1408</td>
            </tr>
          </tfoot>
        </table>
        <table className="bp4-html-table ">
          <thead>
            <tr>
              <th>Project</th>
              <th>Description</th>
              <th>Technologies</th>
              <th>Contributors</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Blueprint</td>
              <td>CSS framework and UI toolkit</td>
              <td>Sass, TypeScript, React</td>
              <td>268</td>
            </tr>
            <tr>
              <td>TSLint</td>
              <td>Static analysis linter for TypeScript</td>
              <td>TypeScript</td>
              <td>403</td>
            </tr>
            <tr>
              <td>Plottable</td>
              <td>Composable charting library built on top of D3</td>
              <td>SVG, TypeScript, D3</td>
              <td>737</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Total</td>
              <td>1408</td>
            </tr>
          </tfoot>
        </table>
        <table className="bp4-html-table ">
          <thead>
            <tr>
              <th>Project</th>
              <th>Description</th>
              <th>Technologies</th>
              <th>Contributors</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Blueprint</td>
              <td>CSS framework and UI toolkit</td>
              <td>Sass, TypeScript, React</td>
              <td>268</td>
            </tr>
            <tr>
              <td>TSLint</td>
              <td>Static analysis linter for TypeScript</td>
              <td>TypeScript</td>
              <td>403</td>
            </tr>
            <tr>
              <td>Plottable</td>
              <td>Composable charting library built on top of D3</td>
              <td>SVG, TypeScript, D3</td>
              <td>737</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Total</td>
              <td>1408</td>
            </tr>
          </tfoot>
        </table>
        <table className="bp4-html-table ">
          <thead>
            <tr>
              <th>Project</th>
              <th>Description</th>
              <th>Technologies</th>
              <th>Contributors</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Blueprint</td>
              <td>CSS framework and UI toolkit</td>
              <td>Sass, TypeScript, React</td>
              <td>268</td>
            </tr>
            <tr>
              <td>TSLint</td>
              <td>Static analysis linter for TypeScript</td>
              <td>TypeScript</td>
              <td>403</td>
            </tr>
            <tr>
              <td>Plottable</td>
              <td>Composable charting library built on top of D3</td>
              <td>SVG, TypeScript, D3</td>
              <td>737</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Total</td>
              <td>1408</td>
            </tr>
          </tfoot>
        </table>
      </Card>

    </main >
  )
}

export const BodyOLD = () => {
  return (
    <main className='Body'>

      <div className="App-header">
        {mySkill({ header: 'TypeScript', content: 'Really good at it!' })}
        {mySkill({ header: 'TypeScript', content: 'Really good at it!' })}
        <p>
          Edit <code>src/App.tsx</code> and save to reload!!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br />
        <p>
          Edit <code>src/App.tsx</code> and save to reload!!!
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload!!!
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload!!!
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload!!!
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload!!!
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload!!!
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload!!!
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload!!!
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload!!!
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload!!!
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload!!!
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload!!!
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload!!!
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload!!!
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload!!!
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload!!!
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload!!!
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload!!!
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload!!!
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload!!!
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload!!!
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload!!!
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload!!!
        </p>
        {/* https://www.linkedin.com/in/marco-ramos-dev
        https://github.com/mramos-dev */}
      </div>
    </main>
  )
}
