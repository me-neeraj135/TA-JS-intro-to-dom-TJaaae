let ul = document.querySelector(`ul`);

data.books.forEach(elm => {
  let li = document.createElement(`li`);
  let img = document.createElement(`img`);
  img.setAttribute(`src`, `${elm.image}`);
  img.classList = `image`;
  let h2 = document.createElement(`h2`);
  h2.innerText = elm.title;
  h2.classList.add(`heading2`);
  let p = document.createElement(`p`);

  let cite = document.createElement(`cite`);
  cite.innerText = elm.author;
  let a = document.createElement(`a`);

  let btn = document.createElement(`button`);
  btn.innerText = `Buy Now`;
  btn.classList.add(`btn`);
  a.append(btn);
  p.append(cite);
  li.append(img, h2, p, a);
  ul.append(li);
});

//   <ul>
//         <li>
//           <img src="" alt="book">
//           <h2></h2>
//           <p>
//             <cite></cite>
//           </p>
//           <button></button>
//         </li>
//       </ul>
