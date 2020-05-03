import React from 'react';
import './App.css';
import './Styles.css';
import Header from './Header';
import BgImg from './BgImg';
import Footer from './Footer';
import RegBtn from './RegBtn';
import './RegBtn.css';

function App() {
  const navItems = ["домашня", "карта", "бібліотека"];
  return (
    <div className="App">
      <Header title="retrocomputing" navItems={navItems}></Header>
      <main class="main">
        <h1>PDP-11</h1>
        <BgImg />
        <br />
        <RegBtn href="#" type="submit" value="Find more on PDP-11" /><br/><br/>
        <RegBtn href="#" type="important" value="Map of computing" />
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia saepe quia aut sunt ratione? Fugiat nostrum quam voluptates praesentium totam quibusdam ab, laborum, molestias autem, debitis quos modi. Dolore, laborum!
            Quae nemo reprehenderit id doloribus, cumque numquam facere recusandae aspernatur? Consequatur eveniet quia similique unde harum reiciendis laudantium iure corrupti recusandae maxime vitae, autem numquam ex magnam, dignissimos debitis perspiciatis.
            Et laborum soluta autem, maiores incidunt numquam ea molestias sed doloribus tempora id! Voluptates aperiam, doloremque nihil quas beatae nostrum quaerat quis explicabo mollitia, eveniet aliquid eligendi labore? Dignissimos, eveniet?
            Corrupti, tempora excepturi? Ipsa laudantium, fuga facere incidunt a sequi ea, rem quisquam voluptatem, temporibus quae deleniti autem? Repudiandae neque, enim nemo commodi doloremque nesciunt est rem temporibus tenetur sit.
            Rerum veniam excepturi sit ipsum cupiditate neque inventore nam aut totam eveniet? Iure consequuntur sequi, odio dignissimos aspernatur, dolores officiis eligendi vero dolorum expedita repellendus dolorem saepe esse repudiandae ullam!
            Obcaecati nam pariatur tenetur numquam maxime. Fugit esse dicta maxime dolores placeat odit sit corrupti quo, quis ipsa voluptatem eos similique nostrum voluptas ut exercitationem ab accusantium sint? Tempore, sunt.
            Magnam laudantium sapiente vel? Cupiditate, perferendis, dolorem ullam dicta eligendi eveniet fugit in culpa recusandae porro consequatur omnis distinctio commodi totam tempore vel deleniti, neque repellendus veniam sint voluptatem debitis.
            Quae, doloremque fugit repellat quibusdam est, vel odio quod quaerat cupiditate quidem porro esse eveniet eius ullam maiores neque culpa ad perferendis beatae eligendi labore. Temporibus odio facilis autem tempore.
            Quos dicta exercitationem facere dolor provident vitae odio quis eius, odit laudantium quam dignissimos libero quidem eligendi excepturi reiciendis voluptate quas? Quasi numquam labore ea asperiores deserunt qui! Adipisci, nostrum.
            Corrupti nesciunt ab nam reiciendis tenetur reprehenderit molestias debitis temporibus, magnam delectus. Recusandae aperiam mollitia dicta quasi veniam, iure eius officiis maxime placeat porro illum eos reprehenderit, amet saepe perspiciatis.  
        </p>
    </main>
    <Footer navTitle="retrocomputing" navItems={navItems} author="Maksym Shumakov" email="shumakov@ucu.edu.ua" place="Ukrainian Catholic University"></Footer>
    </div>
  );
}

export default App;
