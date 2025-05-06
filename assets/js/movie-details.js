
const RELATED_COUNT_ELEMENT = 20;
const randomElementOfArray = arr => arr[Math.floor(Math.random() * arr.length)];
const avatarUsersLink = [1, 2, 3, 4];
const comments = [
  {
    rvTitle: "A Marvel masterpiece in every sense",
    rvTime: "22 March 2021",
    rvUser: "cinemalover92",
    rvStars: 10,
    rvContent: "From start to finish, this film kept me hooked with its phenomenal storytelling, layered characters, and stunning cinematography. The directors managed to balance humor, action, and emotion in such a seamless way that it felt like a rollercoaster of feelings. Each character had depth and purpose, making every scene feel impactful. The action sequences were choreographed with precision, and the special effects elevated the whole experience. I was deeply moved by the sacrifices, the emotional decisions, and the overall message of hope. I’ve watched it three times already and still discover new details. Marvel has outdone itself."
  },
  {
    rvTitle: "Visually epic but emotionally average",
    rvTime: "5 July 2020",
    rvUser: "casualwatcher23",
    rvStars: 6,
    rvContent: "The visual effects were mind-blowing, especially during the final battle scenes and world-building segments. However, the emotional stakes felt a bit forced at times. Some character arcs lacked the payoff I was hoping for. While the performances were solid and the direction competent, the screenplay could have been tighter. Still, a worthwhile watch for any Marvel fan."
  },
  {
    rvTitle: "Emotionally intense and brilliantly directed",
    rvTime: "18 October 2022",
    rvUser: "heroicfan77",
    rvStars: 9,
    rvContent: "An emotionally intense experience that kept me deeply invested in each character’s journey. The film dives into themes of identity, sacrifice, and destiny, while maintaining the epic scope Marvel is known for. There are quieter moments of reflection that are beautifully juxtaposed with grand action set pieces. Every frame feels carefully crafted, and the acting is top-notch. The chemistry between cast members is genuine and heartfelt. A truly unforgettable entry in the franchise that manages to stay with you long after the credits roll. I was tearing up by the end, something I didn’t expect going in. Highly recommended."
  },
  {
    rvTitle: "A visually impressive but narratively weak entry",
    rvTime: "12 November 2023",
    rvUser: "comiccritic08",
    rvStars: 5,
    rvContent: "This film looks amazing, there’s no denying that. The CGI, costume design, and set pieces were all top-notch. However, the story lacked the emotional depth and complexity I’ve come to expect from Marvel’s best works. Some characters felt underdeveloped, and the pacing was inconsistent. Still, the film had moments of brilliance, especially in its exploration of moral ambiguity. It’s entertaining, but not groundbreaking."
  },
  {
    rvTitle: "One of the most powerful films in the Marvel universe",
    rvTime: "3 January 2024",
    rvUser: "mcu_junkie",
    rvStars: 10,
    rvContent: "This is more than just a superhero movie — it’s a deeply emotional, thought-provoking journey that explores identity, grief, and resilience. The direction is masterful, the performances heartfelt, and the music absolutely haunting in the best way. Each scene is packed with tension, meaning, and impact. I found myself reflecting on the film long after watching it. This is the kind of cinema that elevates the entire genre. I can't wait to see where Marvel takes these characters next."
  },
  {
    rvTitle: "Solid effort with standout performances",
    rvTime: "27 April 2021",
    rvUser: "filmaddict39",
    rvStars: 7,
    rvContent: "While the plot may not break new ground, the performances from the leads really shine. The emotional range on display is impressive, and you can tell the actors are fully invested in their roles. The cinematography is striking, with several scenes worthy of being paused and appreciated. Some pacing issues in the second act, but overall a strong addition to the Marvel franchise."
  },
  {
    rvTitle: "Tried to be epic but fell flat",
    rvTime: "10 June 2020",
    rvUser: "grumpymarvel",
    rvStars: 3,
    rvContent: "The film tried really hard to hit those emotional highs and epic moments, but I just didn’t feel it. The characters made illogical choices, the villain was underwhelming, and the humor didn’t land. I found myself checking the time more than once. Disappointing, especially given how hyped this release was. Maybe hardcore fans will enjoy it more."
  },
  {
    rvTitle: "Absolutely phenomenal in every aspect",
    rvTime: "9 December 2022",
    rvUser: "epicscenequeen",
    rvStars: 9,
    rvContent: "An absolute triumph from Marvel. The action sequences are intense, yet emotionally grounded. I loved how the film explored loss, legacy, and what it means to be a hero in a world full of uncertainties. The performances, particularly from the leads, were award-worthy. This is a cinematic experience that deserves to be seen on the biggest screen possible. I had chills more than once during key scenes. Brilliant work!"
  },
  {
    rvTitle: "Could have been better",
    rvTime: "20 May 2025",
    rvUser: "averageviewer54",
    rvStars: 4,
    rvContent: "I really wanted to love this movie, but it just didn’t live up to the hype. The pacing was off, some scenes dragged on for too long, and I didn’t feel a connection with the characters. The effects were good and there were a few cool moments, but overall, it felt like style over substance. I hope the next installment improves on these flaws."
  },
  {
    rvTitle: "Marvel magic continues",
    rvTime: "17 August 2020",
    rvUser: "superfan101",
    rvStars: 8,
    rvContent: "Marvel continues its streak of solid films with this visually rich and emotionally resonant story. There’s a great balance of humor, action, and heart, which is no small feat given the scale of the production. The themes of redemption and purpose are explored with maturity, and the climax delivers a satisfying payoff. It’s not perfect, but it’s a great ride from beginning to end."
  },
  {
    rvTitle: "Emotional depth meets explosive action",
    rvTime: "8 February 2023",
    rvUser: "theaterjunkie87",
    rvStars: 9,
    rvContent: "This movie hit every note perfectly — from deeply emotional character development to high-octane action that had me gripping the seat. The script had substance, and the dialogue was smart and meaningful. It wasn’t just a film — it was a cinematic event. I loved how it tackled themes like guilt, responsibility, and forgiveness without ever slowing down the pace. The musical score enhanced the experience tenfold. Truly unforgettable and one of Marvel’s finest."
  },
  {
    rvTitle: "A bold new direction for the MCU",
    rvTime: "13 March 2024",
    rvUser: "marvelmind99",
    rvStars: 8,
    rvContent: "This film took risks and it paid off. It’s not the usual formula — the tone is darker, the stakes are higher, and the storytelling is more mature. There are a few moments that felt slightly rushed, but overall it was a refreshing and ambitious take on the Marvel universe. The performances were raw and authentic, and the cinematography was breathtaking. This is the kind of movie that rewards multiple viewings."
  },
  {
    rvTitle: "Great visuals, messy story",
    rvTime: "19 September 2021",
    rvUser: "honestbob",
    rvStars: 5,
    rvContent: "Let’s be real: this movie looks amazing. From start to finish, the production value is off the charts. But once you look past the surface, the plot becomes a bit of a mess. There are too many subplots, and some characters feel shoehorned in. The pacing was inconsistent, and I didn’t feel the emotional impact the creators were clearly aiming for. It’s fun to watch, but don’t expect anything too deep."
  },
  {
    rvTitle: "A cinematic rollercoaster",
    rvTime: "2 May 2020",
    rvUser: "screenjunkie72",
    rvStars: 10,
    rvContent: "From the opening scene to the final frame, this film is a nonstop ride of excitement, emotion, and epic storytelling. The characters are compelling, the plot is well-paced, and the emotional beats hit hard. I cried. I laughed. I stood up and applauded when the credits rolled. It’s rare that a superhero film achieves this level of storytelling. Marvel once again proves they know how to deliver top-tier entertainment."
  },
  {
    rvTitle: "Forgettable and formulaic",
    rvTime: "6 August 2025",
    rvUser: "filmrealist",
    rvStars: 2,
    rvContent: "Sadly, this movie felt like a copy-paste of other Marvel films. It lacked originality and depth. The emotional scenes felt forced, the villain was forgettable, and the jokes were repetitive. While the visuals were decent, they weren’t enough to save a story that lacked heart and soul. I left the theater feeling underwhelmed and a bit bored."
  },
  {
    rvTitle: "An epic blend of emotion and spectacle",
    rvTime: "23 December 2020",
    rvUser: "bigmarvelfan01",
    rvStars: 9,
    rvContent: "This movie brings together everything I love about the MCU: heart, humor, stunning visuals, and an unforgettable score. The way it weaves together complex character arcs with thrilling action scenes is masterful. Each line of dialogue felt intentional, and the direction brought a level of polish and elegance I haven’t seen in a while. Easily one of the best post-Endgame films. It’s not just a good superhero movie — it’s a great movie, period."
  },
  {
    rvTitle: "Visually cool but lacking substance",
    rvTime: "30 April 2023",
    rvUser: "vfxcritic",
    rvStars: 4,
    rvContent: "I went in hoping for a meaningful story, but unfortunately all I got was flash without heart. Sure, the CGI was impressive, and the costumes were top-tier. But the characters made illogical decisions and the plot felt stitched together from better Marvel films. If you’re watching just for the action, it’ll satisfy — but don’t expect to be emotionally moved."
  },
  {
    rvTitle: "A must-watch for longtime fans",
    rvTime: "11 October 2024",
    rvUser: "nerdcorealpha",
    rvStars: 8,
    rvContent: "This movie is a love letter to Marvel fans. There are so many callbacks, easter eggs, and emotional payoffs that longtime viewers will absolutely appreciate. While new viewers might be slightly lost in the lore, for fans like me, it was a powerful and rewarding experience. The performances are excellent, and the ending is both surprising and fitting. Can’t wait for the next chapter."
  },
  {
    rvTitle: "A surprising and bold move by Marvel",
    rvTime: "29 January 2021",
    rvUser: "plotdetective",
    rvStars: 7,
    rvContent: "This wasn’t the movie I expected — and I mean that in a good way. It subverted a lot of the traditional Marvel tropes and introduced new characters and ideas in a refreshing way. The middle part dragged a little, but the beginning and end were strong. It's more character-focused than action-driven, and that’s a welcome change. Definitely not for everyone, but I appreciated the risks it took."
  },
  {
    rvTitle: "A visual and emotional marvel",
    rvTime: "14 July 2022",
    rvUser: "movieman_007",
    rvStars: 10,
    rvContent: "This is storytelling at its finest. The film beautifully captures the essence of each character while delivering jaw-dropping visuals and meaningful moments. The emotional resonance is what truly sets this apart. Every frame, every note of the soundtrack, every bit of dialogue builds toward something powerful. I didn’t expect to be moved to tears, but I was. This is why I love movies — they make you feel. Marvel nailed it with this one."
  }
];


document.addEventListener("DOMContentLoaded", () => {
  // setInterval(() => { transSlider(randomElementOfArray(['right', 'left'])); }, 5000);
  genDataSlider();
  const underlineNav = document.querySelector(".active-btn-movie-details-details");
  const movieDetailsNavAll = [...document.querySelectorAll(".movie-details-details-nav li button")];
  underlineNav.style.width = `${movieDetailsNavAll[0].clientWidth}px`;

  const tabDetailsContent = document.querySelectorAll(".movie-details-details-content>li");

  movieDetailsNavAll
    .forEach(item => item
      .addEventListener("click", (e) => toggleMoveUnderline(e, underlineNav, movieDetailsNavAll, tabDetailsContent)));
  const movieDetailsTab = document.querySelectorAll(".movie-details-details-content-page");
  const animationsName = ["showAndMoveX", "showAndMoveXR"];
  console.log(randomElementOfArray(animationsName));

  movieDetailsTab.forEach(element => {
    let duration = 0.25;
    [...element.children].forEach(item => {
      [...item.children].forEach(subItem => {
        subItem.style.animation = `${randomElementOfArray(animationsName)} ${duration}s ease-out`;
        duration *= 1.1;
      })
    })
  })
});

const toggleMoveUnderline = (e, underlineNav, movieDetailsNavAll, tabDetailsContent) => {
  const GAP = 20;
  const currentIndex = movieDetailsNavAll.indexOf(e.target);
  if (currentIndex == 1) generateComments();
  document.querySelector(".active-tab-movie-details").classList.remove("active-tab-movie-details");
  tabDetailsContent[currentIndex].classList.add("active-tab-movie-details");
  underlineNav.style.width = `${e.target.clientWidth}px`;

  let offset = 0;
  for (let i = 0; i < currentIndex; i++) {
    offset += movieDetailsNavAll[i].clientWidth + GAP;
  }
  underlineNav.style.transform = `translateX(${offset}px)`;

  document.querySelector(".movie-details-details-nav li button.yellow-color")
    .classList.remove("yellow-color");
  e.target.classList.add("yellow-color");
}
const toggleMovieTrailer = () => {
  const modal = document.querySelector(".movie-trailer");
  modal.classList.toggle("active-modal-movie-trailer");
  document.body.classList.toggle("no-scroll");
}
const generateComments = () => {
  const commentContainer = document.querySelector(".movie-details-details-content-page2 ul");
  commentContainer.innerHTML = "";
  comments.forEach(cmt => {
    const colors = [
      "#3d7884", "#7b3d84", "#3d8477", "#844b3d", "#84703d",
      "#6b9a8f", "#9e3d84", "#7d844b", "#847b3d", "#3d6b84",
      "#5c7c8a", "#d17fae", "#5b7d55", "#b16f44", "#6e773e",
      "#528c7d", "#c07f8f", "#7c6a4b", "#97b56b", "#7c3f6f",
      "#a4c8b6", "#cb5a7d"
    ];

    commentContainer.innerHTML += `
      <li>
        <div style="display: flex; align-items: center; gap: 20px;">
          <div class="review-page-avatar">
            <div style="background-color: ${randomElementOfArray(colors)}">${cmt.rvUser[0]}</div>
          </div>
          <div>
            <h3 class="review-page-title">${cmt.rvTitle}</h3>
            <div class="review-page-time">${cmt.rvTime} by <a href="#">${cmt.rvUser}</a></div>
            <span>⭐${cmt.rvStars}/10</span>
          </div>
        </div>
        <p class="review-page-content">${cmt.rvContent}</p>
      </li>
      <hr> 
    `;
  })
}

const stateTranslate = {
  currentTranslateX: 0,
  currentPage: 0
}
const transSlider = direction => {

  const relatedMovieContainer = document.querySelector(".movie-details-details-content-content-slider ul");
  const currentVisibleUlWidth = relatedMovieContainer.clientWidth;

  // let distance = relatedMovieContainer.children[0].getBoundingClientRect().width;
  const GAP = 10;
  let distance = GAP + relatedMovieContainer.children[0].clientWidth;

  const maxTransLeft = 0;
  const maxTransRight = relatedMovieContainer.scrollWidth - currentVisibleUlWidth;

  if (direction === "right") {
    stateTranslate.currentTranslateX -= distance;
    if (-stateTranslate.currentTranslateX > maxTransRight) {
      stateTranslate.currentTranslateX = -maxTransRight;
    }
    stateTranslate.currentPage++;
  } else if (direction === "left") {
    stateTranslate.currentTranslateX += distance;
    if (-stateTranslate.currentTranslateX < maxTransLeft) stateTranslate.currentTranslateX = 0;
    stateTranslate.currentPage--;
  }

  console.log("max: ", maxTransRight);
  console.log("current: ", stateTranslate.currentTranslateX);

  relatedMovieContainer.style.transform = `translateX(${stateTranslate.currentTranslateX}px)`;
}

const genDataSlider = () => {
  const ulSliderContainer = document.querySelector(".movie-details-details-content-content-slider ul");
  ulSliderContainer.innerHTML = "";
  for (let i = 0; i < RELATED_COUNT_ELEMENT; i++) {
    const obj = data[i];
    ulSliderContainer.innerHTML +=
      `
      <li>
        <div>
          <a style="display: block; height: 100%;" href="../pages/movie-details.html">
            <img
              src="../assets/${obj.img}" style="border-radius: 10px; height: 200px; width: 100%"
              alt="${obj.title}"></a>
        </div>
        <div>
          <div class="details-inner-content">
            <a href="../pages/movie-details.html">
              <h2 style="font-size: 18px; font-weight: bold;">${obj.title} (${obj.year})</h2>
            </a>
            <span>⭐${obj.rating}/10</span>
            <p>${obj.description}</p>
          </div>
          <a href="../pages/movie-details.html">
            <button class="btn">View</button>
          </a>
        </div>
      </li>
    `;
  }
}
