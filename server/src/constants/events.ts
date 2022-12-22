const EVENTS = [
  {
    name: "event1",
    organizer: "organizer1",
    fees: 100,
    memberCount: 10,
    coordinators: [
      {
        name: "coordinator1",
        phone: "1234567890",
      },
    ],
    introduction: `introduction1`,
    rules: `rules1`,
    bannerUrl: "bannerUrl1",
    organizerLogoUrl: "organizerLogoUrl1",
  },
  {
    name: "What if?",
    organizer: "Theatrix",
    fees: 200,
    memberCount: 4,
    coordinators: [
      {
        name: "Abhranil Roy",
        phone: "7044992461",
      },
      {
        name: "Snehatit Sett",
        phone: "9836729146",
      },
      {
        name: "Srijani Dasgupta",
        phone: "9830896527",
      },
    ],
    introduction: `"In dreams, we enter, a world that's entirely our own" ~ Albus Dumbledore Have you ever wanted to barge into the screen writer's office of a movie that you loved and just wanted to take over the narration. Well, you've come to the right place!! Because here we are giving you the chance to let your imagination run wild. What if Augustus Rockwood never killed Fred? अगर देवदा स ने चंद्रमुखी की बा त मा न ली हो ती , तो क्या हो ता ? যদি সে মন্তী সরকা র সো না দা র কা ছে ইসলা মী ক ইতি হা স নি য়ে না পড়ত তবে কে মন হতো তুমি বলতো ? With a swish and flick of your pen you can have your own exclusive storyline. All you have to do is ask WHAT IF?`,
    rules: `Each team will consist of 4 members (schools and colleges inclusive) who'll take any famous scene from any famous story/movie/book etc and have to alter the storyline and perform. Example: 1) Chitrangada and Arjun story 2) If Aman Mathur never dies in Kal ho na ho etc 3) What if the magic of Gupi-Bagha stops working ? The winner will be that team who'll create the best storyline and act wonderfully. They will be judged on the basis of these points: 1) Storyline 2) Acting 3) Timing 4) Audience reaction`,
    bannerUrl: null,
    organizerLogoUrl: null,
  },
  {
    name: "Crusade of Conceptions",
    organizer: "UEMMUN Student Chapter",
    fees: 100,
    memberCount: 3+1,
    coordinators: [
      {
        name: "Md Fuzail",
        phone: "7219487201",
      },
      {
        name: "Chirag Gupta",
        phone: "7003924897",
      },
      {
        name: "Shreya Chatterjee",
        phone:"6205056962",
      },
    ],
    introduction: `The power of one's rationalization is a contributing factor towards their cognitive and intellectual wit. What better way to enhance these skills than to battle it out in Crusade Of Conceptions, a multilingual debate competition organized by Eutopia. This event is designed to allow you to audaciously put forward your unapologetic opinions, for we all know the only way to find your voice is to use it.`,
    rules: null,
    bannerUrl: null,
    organizerLogoUrl: null,
  },
  {
    name: "Melisma",
    organizer: "Symphony",
    fees: 200,
    memberCount: 4,
    coordinators: [
      {
        name: "Dibyojyoti Ghosh",
        phone: "9903223314",
      },
      {
        name: "Nirban Saha",
        phone: "9330192084",
      },
    ],
    introduction: `"When the dog bites, when the bee stings, when I'm feeling sad. I simply remember my favorite things, and then I don't feel so bad" ~ Sound of Music. We are quite confident that the tune to this particular melody snuck up on you as you were reading the lines. Music exists to cure and integrate, it is quite fundamentally the profoundest non chemical medication that exists. Melisma/(whatever the event name is) is one such event organized by Eutopia to allow you to embrace music through the performance of your authentic lyrical composition, and allowing your symphony behold us`,
    rules: null,
    bannerUrl: null,
    organizerLogoUrl: null,
  },
  {
    name: "Ecrivons",
    organizer: "Voices",
    fees: 100,
    memberCount: 1,
    coordinators: [
      {
        name: "Surendra Mohan Jha",
        phone: "9903223314",
      },
      {
        name: "Anita Mukherjee",
        phone: "8250289175",
      },
    ],
    introduction: `Poetry according to Wordsworth was the spontaneous overflow of feelings recollected in tranquillity. From Parnassian poets to Metaphysical poets, from Romanticism to Modernism, poetry has in itself evolved with us to fit our perspectives and identities. Eutopia is giving you the opportunity to explore your incongruous imagery, through poetry, and a chance to discover self-expression through sonnets and odes.`,
    rules: null,
    bannerUrl: null,
    organizerLogoUrl: null,
  },
  {
    name: "Game of POV's",
    organizer: "Voices",
    fees: 100,
    memberCount: 1,
    coordinators: [
      {
        name: "Ayush Mazumdar",
        phone: "9903223314",
      },
      {
        name: "Subhadip Das",
        phone: "9907035203",
      },
    ],
    introduction: `A wise man once said “A picture speaks a thousand words ”. Different people from various walks of life have a lot of different perspectives on whatever is happening around us, be it the birds chirping around us as the sun comes up at dawn, or the crickets sounding the loudest on a chilly winter midnight. Have you ever wanted to put forward your own point of view in every situation? Do you think that you have the knack of creating a perspective out of nothing? Then you are at the right place. Let your imagination flare up the fire and your pen to express it`,
    rules: `1) A multi-perceptual picture will be presented to the participants before the writing time for the event commences. 2) The participants will be asked to write a composition to present their own point of view and vision of the picture shown to them at the commencement of the event.`,
    bannerUrl: null,
    organizerLogoUrl: null,
  },
  {
    name: "Battle of Bookworms",
    organizer: "Pragya",
    fees: 100,
    memberCount: 2,
    coordinators: [
      {
        name: "Chirag Chakraborty",
        phone: "9932392299",
      },
      {
        name: "Shayak Karan",
        phone: "9123362188",
      },
    ],
    introduction: `The decline of literature indicates the decline of a nation. Every mind speaks of a different thought and we as an individual need a safe space to vocal our words out. "Literature is my Eutopia. Here I am not disenfranchised. No barrier of the senses shuts me out from the sweet, gracious discourses of my book friends. They talk to me without embarrassment or awkwardness." _Helen Keller Literature the word doesn’t mean the English genre but varies in every language, its nothing but a form of an art and is the art of discovering something extraordinary about ordinary people, and saying with ordinary words something extraordinary. To define what literature actually means and that too in various field of languages; what can probably be the event that best stages the topic : ……A Quiz………`,
    rules: `1. Maximum 2 people per team 2. The theme will be centered around Literature 3. Any kind of unfair means (googling, etc) will lead to immediate disqualification. 4. The Quizmaster's decision will be final and binding.`,
    bannerUrl: null,
    organizerLogoUrl: null,
  },
  {
    name: "Muggle Who",
    organizer: "Toastmasters",
    fees: 100,
    memberCount: 1,
    coordinators: [
      {
        name: "Debarati Saha",
        phone: "8777429089",
      },
      {
        name: "Srideep Banerjee",
        phone: "8981045006",
      },
    ],
    introduction: `Rowling made sure to give us a plethora of unambiguous, riveting characters in her seven-part epic. Luna Lovegood's habit of reading Quibbler upside down, Hermione's ability to be an (insufferable) know-it-all, Snape's tight upper lip and so it goes on. Eutopia has arranged this exhilarating event, tailored to give you an opportune moment to embody these characters, uniting your individuality with their mannerism`,
    rules: `Participants will be given a fair chance to pick a chit containing a harry potter character and then one member has to enact and give hints to their partner to guess the same. This isn ’t the end . To prove that you are just not like any other muggle born, you have to give a speech of two minutes about the character. IF YOUR MUGGLE BRAIN CAN NOT BRING UP THE CHARACTER, SORRY FOLKS YOU WILL BE ELIMINATED. They will be judged on the basis of these points: 1) Acting skills 2) Speaking Skills 3) On spot thinking capability.`,
    bannerUrl: null,
    organizerLogoUrl: null,
  },
  {
    name: "Soothsayer's",
    organizer: "Toastmasters",
    fees: 50,
    memberCount: 1,
    coordinators: [
      {
        name: "Debarati Saha",
        phone: "8777429089",
      },
      {
        name: "Srideep Banerjee",
        phone: "8981045006",
      },
    ],
    introduction: `"Friends, Romans, countrymen, lend me your ears; I come to bury Caesar, not to praise him" Who could forget Marc Anthony's climactic speech in Julius Caesar or the heartbreaking ending dialogue by Jack in Titanic, You must do me this honor. Promise me you'll survive. That you won't give up, no matter what happens, no matter how hopeless. The extensiveness of the impact that a narrative can have on the reader is largely based on a powerful climax and a wholesome ending. This event is going to test this indispensable skill as a writer by asking you to delineate the climax/ending of a given video recording. A worthy challenge for a writer, to prove their virtuosity and excellence`,
    rules: `Participants will be separated into two different rooms where they will be shown a clip in each room and they have to make their own end or form the climax. A 1 min gap will be provided to think creatively. A 2 min speech shall decide if they are creative enough for the next round. In the final round the best of both rooms are to be flocked into one room and shown a clip together. The winner will be decided based on the same pattern. They will be judged on the basis of these points: 1) Storyline 2) Speaking Skills 3) Creativity`,
    bannerUrl: null,
    organizerLogoUrl: null,
  },
  {
    name: "Mic Drop",
    organizer: null,
    fees: 50,
    memberCount: 1,
    coordinators: [
      {
        name: "Debarati Saha",
        phone: "8777429089",
      },
      {
        name: "Agniva Mahata",
        phone: "6303427934",
      },
    ],
    introduction: `"Why be a king when you can be a god" ~ Marshall MC'ing is a crucial element to the hip-hop culture and has had an overwhelming influence on the society, speaking up for generations and providing a voice to marginalized populations. Here is your chance to be heard at Rhapsody. An Eutopian event where you can galvanize your audience with the strike of your verse. So gear up to claim you Godhood.`,
    rules: null,
    bannerUrl: null,
    organizerLogoUrl: null,
  },
  {
    name: "Beat It",
    organizer: null,
    fees: 50,
    memberCount: 1,
    coordinators: [
      {
        name: "Debarati Saha",
        phone: "8777429089",
      },
      {
        name: "Agniva Mahata",
        phone: "6303427934",
      },

    ],
    introduction: `Let's rewind the time. Boîte à rythme dates back centuries, to the tabla bols used in North Indian music that were used to imitate the tabla drums. Other forms of vocal percussion have evolved since then, including the intentionally raspy vocal quality used in African spiritual music to the scatting and bass hums in jazz and blues music. Today this game of beats has become more widespread in mainstream culture, and Eutopia is honoring it by organizing Beat It. An event dedicated to the Boîte à rythme community, designed to give you a life time opportunity to conquer the stage with your beats and showcase an electrifying performance. Let the beat drop...`,
    rules: null,
    bannerUrl: null,
    organizerLogoUrl: null,
  },
  {
    name: "Yule Ball 2.0",
    organizer: "Toastmasters",
    fees: 0,
    memberCount: 1,
    coordinators: [
      {
        name: "Debarati Saha",
        phone: "8777429089",
      },
      {
        name: "Srideep Banerjee",
        phone: "8981045006",
      },
    ],
    introduction: `Well Oculus Reparo your glasses, and get ready to leave your muggle robes behind, for you are cordially invited to the Yule Ball 2.0. After careful deliberation with the magical confederation, Eutopia has decided to host a Go-As You-Like Ball, to bring forth the joy of dressing up as your favorite character and living your Potterhead dream.`,
    rules: `Participants will dress up and walk the Yule Ball 2.0 just like in harry potter series but dressed as their favorite character. This event is restricted to only school students(Class 8-12). They will be judged on the basis of these points: 1) Dress 2) Confidence 3) Creativity 4) Instructions`,
    bannerUrl: null,
    organizerLogoUrl: null,
  },
  {
    name: "Open Graffiti Session",
    organizer: null,
    fees: 50,
    memberCount: 1,
    coordinators: [
      {
        name: "Supratik Saha",
        phone: "7083291046",
      },
    ],
    introduction: `Glow-in-the-dark event with this dissident form of art that was created to express protest. Back to the sands of time when Graffiti being illegal unauthorized the marking of public space by an individual, Eutopia is providing you the platform to hustle with your canvas. Be antisocial and express. Use your spray cans and let the darkest mysteries empress. Eutopia welcomes you all to this open Graffiti sessions. So make sure to leave your mark!`,
    rules: null,
    bannerUrl: null,
    organizerLogoUrl: null,
  },
  {
    name: "Pixel Stories",
    organizer: "Iris",
    fees: 0,
    memberCount: 1,
    coordinators: [
      {
        name: "Sneheel Singh",
        phone: "9831630966",
      },
      {
        name: "Parna Chowdhury",
        phone: "9051154256",
      },
    ],
    introduction: `Iris, the photographic society of the University of Engineering and Management, Kolkata brings forth a Workshop on the 14th of January 2023. Who are enthusiastic towards learning the art of capturing the world through a lens of a camera.`,
    rules: `• It is open to all the students of UEMK • Mobile photographers are also encouraged to register for this event • It is going to be a basic workshop where one will be gaining knowledge about photo composition, and how to manage a camera or a mobile`,
    bannerUrl: null,
    organizerLogoUrl: null,
  },
  {
    name: "Symposium",
    organizer: null,
    fees: 0,
    memberCount: 1,
    coordinators: [
      {
        name: "Simon Sarkar",
        phone: "8250793901",
      },
    ],
    introduction: `Everything comes back in circles and art is just a reflection of life rather than life itself. Covering so many time periods and elegance, literature has had an exceptional impact on the course of history through its ability to reflect the world through the use of various caricature and imagination. Thus, with every beginning of a new century, there emerged a different branch of art. Imagining literature as a form is like a giant diagram of a tree, with litterateur, representing the leaves and art as the fruit.`,
    rules: null,
    bannerUrl: null,
    organizerLogoUrl: null,
  },
  {
    name: "Flash Mob",
    organizer: null,
    fees: 0,
    memberCount: 1,
    coordinators: [
      {
        name: null,
        phone: null,
      },
      {
        name: null,
        phone: null,
      },
      {
        name: null,
        phone: null,
      },
    ],
    introduction: `"Inside every girl a dainty swan slumber, awaiting to stretch her wings and take a flight. Inside every boy a lordly lion slumbers waiting to prance…" Now, keeping in my mind Professor McGonagall's wise words, let's get ready to turn our groove on to Hedwig's Theme. Tap into the magical world of choreography and synchronize your moves to this particularly immortal creation of John Williams. PS: Don't forget to iron your dress robes.`,
    rules: null,
    bannerUrl: null,
    organizerLogoUrl: null,
  },
  {
    name: "Last hurrah",
    organizer: null,
    fees: 0,
    memberCount: 1,
    coordinators: [
      {
        name: null,
        phone: null,
      },
      {
        name: null,
        phone: null,
      },
      {
        name: null,
        phone: null,
      },
    ],
    introduction: null,
    rules: null,
    bannerUrl: null,
    organizerLogoUrl: null,
  },
];
