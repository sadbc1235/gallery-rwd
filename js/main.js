window.addEventListener("load", () => {
  const grid = new Isotope("section", {
    itemSelector: "article",
    columnWidth: "article",
    transitionDuration: "0.5s",
  });

  const btns = document.querySelectorAll("main ul li");

  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      if (btn.classList[0] === "on") {
        return;
      }
      activation(e);
    });
  });

  const activation = (e) => {
    for (let btn of btns) btn.classList.remove("on");
    e.currentTarget.classList.add("on");

    const btn_a = e.currentTarget.querySelector("a");
    const a_href = btn_a.getAttribute("href");
    grid.arrange({
      filter: a_href,
    });
  };
});
