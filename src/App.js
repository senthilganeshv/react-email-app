import "./App.css";

import { MailSideBar, SideBar } from "./components";
import { TopBar } from "./components";

function App() {
  return (
    <div className="app">
      <SideBar />

      <main>
        <TopBar />
        <div className="main-container">
          <MailSideBar />

          <div className="mail-container">
            <nav>
              <h3>FOLDERS</h3>
              <ul>
                <li>Inbox</li>
                <li>Sent Items</li>
                <li>Important</li>
                <li>Drafts</li>
                <li>Trash</li>
              </ul>
            </nav>
            <nav>
              <h3>CATEGORIES</h3>
              <ul>
                <li>Work</li>
                <li>Documents</li>
                <li>Social</li>
                <li>Advertising</li>
                <li>Clients</li>
              </ul>
            </nav>
            <nav>
              <h3>LABELS</h3>
              <ul>
                <li>Family</li>
                <li>Work</li>
                <li>Home</li>
                <li>Children</li>
                <li>Holidays</li>
                <li>Music</li>
                <li>Photography</li>
                <li>Film</li>
              </ul>
            </nav>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
