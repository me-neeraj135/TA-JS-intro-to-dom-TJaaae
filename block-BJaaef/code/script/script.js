let ul = document.querySelector(`ul`);

got.houses.forEach(got => {
  got.people.forEach(a => {
    let li = document.createElement(`li`);
    let div0 = document.createElement(`div`);
    div0.classList.add(`img-cast-box`);

    let div1 = document.createElement(`div`);
    div1.classList.add(`img-box`);

    let img = document.createElement(`img`);
    img.classList.add(`image`);
    img.src = a.image;

    div1.append(img);

    let div2 = document.createElement(`div`);
    div2.classList.add(`cast-box`);
    div2.innerText = a.name;

    div0.append(div1, div2);

    let div3 = document.createElement(`div`);

    div3.classList.add(`para-div`);
    let p = document.createElement(`p`);
    p.innerText = a.description;
    div3.append(p);

    let btn = document.createElement(`button`);
    btn.classList.add(`btn`);

    let a2 = document.createElement(`a`);
    a2.innerText = `Learn More`;
    a2.classList.add(`a2`);

    btn.append(a2);
    li.append(div0, div3, btn);
    ul.append(li);
  });
});

//  <ul>
//    <li>
//      <div0>
//        <div1></div>
//        <div2></div>
//      </div>
//      <div3>
//        <p></p>
//      </div>
//      <div4>
//        <a href=""></a>
//      </div>
//    </li>
//  </ul>
