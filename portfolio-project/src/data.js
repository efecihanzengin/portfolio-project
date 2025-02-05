// data yaratilacak
const languagesData = {
	en: {
	    changeLanguage: "TÜRKÇE",
	    hero: {
		  greeting: "Hi!",
		  intro: " I'm a front-end developer. And I love to center the 'div'",
		  profileImg: "/assets/images/profilePhoto.png",
		  profileName: "My name is Efe.",
		  linkedInSVG: "/assets/images/linkedin.png",
		  linkedInLink: "https://www.linkedin.com/in/efe-cihan-zengin-7b2433102/",
		  githubSVG: "/assets/images/github.svg",
		  githubLink: "https://github.com/efecihanzengin",
		  heroFooter: "Currently Freelancing for UX,UI, & Web Design Project.",
		  heroFooter2: "Invite me to join your team -> ",
		  heroFooterMail: "efecihanzengin@gmail.com",
	    },

        skills: {
            h1: "Skills",
		  images: [
			{
			    Alt: "JAVASCRIPT",
			    SRC: "/assets/images/javascript.png",
			},
			{
			    Alt: "REACT",
			    SRC: "/assets/images/react.webp",
			},
			{
			    Alt: "REDUX",
			    SRC: "/assets/images/redux.png",
			},
			{
			    Alt: "NODE",
			    SRC: "/assets/images/inde.svg",
			},
			{
			    Alt: "VS CODE",
			    SRC: "/assets/images/vscode.png",
			},
			{
			    Alt: "FIGMA",
			    SRC: "/assets/images/figma.png",
			}
		  ]
	    }
	    ,
	    profile: {
		  profileText: "Profile",
		  cart: {
			h1: "Basic Information",
			dateOfBirthText: "Date of Birth",
			dateOfBirth: "01.06.1997",
			cityText: "City of residence",
			city: "Izmir",
			educationText: "Educational background",
			education: "Istanbul Technical University",
			rolText: "Preferred Role",
			rol: "Frontend"
		  },
		  about: {
			aboutMe: "About me",
			text1: "I graduated from ITU with a degree in Marine Transportation Engineering, but I decided to shift my career towards software development. Currently, I am enrolled in the Full Stack Development program at Workintech, focusing primarily on front-end technologies. I work with HTML, CSS, JavaScript, React, and Tailwind CSS to build modern, user-friendly interfaces. With strong analytical thinking and problem-solving skills, I am committed to continuous learning and self-improvement in the tech industry. My goal is to expand my knowledge into back-end development as well, becoming a full-stack developer capable of creating comprehensive and efficient software solutions.",
			text2: "I am deeply passionate about discovering new concepts and technologies, always striving for continuous self-improvement. With a strong ability to learn quickly, I expand my knowledge and skills through thorough research and hands-on experience. My curiosity and dedication push me to seek out new learning opportunities and stay up to date with the latest advancements in my field."
		  }
	    },
	    projects: {
		  h1: "Projects",
		  myProjects: [
			{
			    id:"witflix",
			    h1: "WitFlix",
			    text: "A web application that replicates the essential features of Netflix, facilitating the search for movies and TV series for users. This project was developed as a personal initiative to enhance my web development expertise.",
			    materials: [ "vercel", "html","css"],
			    viewText: "View on Github",
			    viewLink: "https://github.com/efecihanzengin/netflix-clone-witflix",
			    appText: "Go to app ->",
			    appLink: "",
			    imgLink: "assets/images/witflix_clone.png",
			},
		 
			{
			    id:"pizzareact",
			    h1: "Pizza Challenge React",
			    text: "A pizza ordering website built with React components, allowing users to navigate the homepage, proceed to the pizza ordering page, and customize their pizza by selecting the dough, size, and additional toppings. Users can also add a custom order note. The price of the order adjusts based on the toppings and quantity of pizzas selected. Upon placing the order, a request is sent to the API 'https://reqres.in/api/pizza', and a confirmation page is displayed with the order details.",
			    materials: ["vercel", "react","router","axios","state management"],
			    viewText: "View on Github",
			    viewLink: "https://github.com/efecihanzengin/pizza-frontend-project",
			    appText: "Go to app ->",
			    appLink: "",
			    imgLink: "assets/images/reactPizza.png",
			},
		  ],
	    },
	    footer: {
		  h1: "Let's work together on your next product.",
		  githubText: "Github",
		  githubLink: "",
		  personelBlogText: "Personel Blog",
		  personelBlogLink: "",
		  linkedInText: "Linkedin",
		  linkedInLink: "",
		  emailText: "Email",
		  emailLink: "",
	    }
	},
	tr: {
	    changeLanguage: "ENGLISH",
	    hero: {
		  greeting: "Merhaba! ",
		  intro: " Ben bir ön yüz geliştiricisiyim ve 'div' ortalamayi cok seviyorum.",
		  profileImg: "/assets/images/profilePhoto.jpg",
		  profileName: "Ben Efe.",
		  linkedInSVG: "/assets/images/linkedin.svg",
		  linkedInLink: "https://www.linkedin.com/in/efe-cihan-zengin-7b2433102/",
		  githubSVG: "/assets/images/github.svg",
		  githubLink: "https://github.com/efecihanzengin",
		  heroFooter: "Frontend ve fullstack calismak icin hazirim.",
		  heroFooter2: "Beni ekibinize davet edin -> ",
		  heroFooterMail: "efecihanzengin@gmail.com",
	    },
	    skills: {
		  h1: "Yetenekler",
		  images: [
			{
			    Alt: "JAVASCRIPT",
			    SRC: "/assets/images/javascript.png",
			},
			{
			    Alt: "REACT",
			    SRC: "/assets/images/react.webp",
			},
			{
			    Alt: "REDUX",
			    SRC: "/assets/images/redux.png",
			},
			{
			    Alt: "NODE",
			    SRC: "/assets/images/inde.png",
			},
			{
			    Alt: "VS CODE",
			    SRC: "/assets/images/vscode.png",
			},
			{
			    Alt: "FIGMA",
			    SRC: "/assets/images/figma.png",
			}
		  ]
	    }
	    ,
	    profile: {
		  profileText: "Profil",
		  cart: {
			h1: "Temel Bilgiler",
			dateOfBirthText: "Doğum tarihi",
			dateOfBirth: "01.06.1997",
			cityText: "İkamet Şehri",
			city: "İzmir",
			educationText: "Eğitim Durumu",
			education: "Istanbul Teknik Universitesi, Deniz Ulastirma Isletme Muhendisligi",
			rolText: "Tercih Ettiği Rol",
			rol: "Frontend"
		  },
		  about: {
			aboutMe: "Hakkımda",
			text1: "İTÜ Deniz Ulaştırma İşletme Mühendisliği mezunuyum, ancak kariyerimi yazılım geliştirme alanına yönlendirdim. Teknolojiye ve yeniliğe olan ilgim, beni yazılım dünyasında kendimi geliştirmeye teşvik etti. Şu anda Workintech’in Full Stack Development programında eğitim alıyor ve özellikle frontend teknolojilerine odaklanıyorum. HTML, CSS, JavaScript, React ve Tailwind CSS gibi araçlarla modern, kullanıcı dostu arayüzler geliştiriyorum. Analitik düşünme becerilerimi ve problem çözme yeteneğimi, tasarım ve kodlamayla birleştirerek etkili çözümler üretmeye çalışıyorum. Hedefim, backend teknolojilerini de öğrenerek full-stack geliştirme konusunda yetkinleşmek ve kapsamlı yazılım projeleri geliştirebilmek.",
			text2: "Yeni teknolojileri keşfetmekten ve kendimi sürekli geliştirmekten büyük keyif alıyorum. Öğrenme sürecini hızlandırmak için detaylı araştırmalar yapıyor, edindiğim bilgileri pratiğe dökerek becerilerimi güçlendiriyorum. Merakım ve kararlılığım, yeni fırsatları yakalamamı ve alanımdaki en son gelişmeleri takip ederek kendimi güncel tutmamı sağlıyor."
		  }
	    },
        projects: {
            h1: "Projects",
            myProjects: [
              {
                  id:"witflix",
                  h1: "WitFlix",
                  text: "Netflix'in temel özelliklerini kopyalayan, kullanıcıların film ve TV dizilerini aramasını kolaylaştıran bir web uygulaması. Bu proje, web geliştirme uzmanlığımı geliştirmek için kişisel bir girişim olarak geliştirildi.",
                  materials: [ "vercel", "html","css"],
                  viewText: "Github' ta göster",
                  viewLink: "https://github.com/efecihanzengin/netflix-clone-witflix",
                  appText: "Uygulamaya git ->",
                  appLink: "",
                  imgLink: "assets/images/witflix_clone.png",
              },
               
              {
                  id:"pizzareact",
                  h1: "Pizza Challenge React",
                  text: "React bileşenleriyle oluşturulmuş bir pizza sipariş sitesi, kullanıcıların ana sayfada gezinmesine, pizza sipariş sayfasına geçmesine ve hamur, boyut ve ek malzemeleri seçerek pizzalarını özelleştirmesine olanak tanır. Kullanıcılar ayrıca özel bir sipariş notu ekleyebilir. Siparişin fiyatı, seçilen malzemelere ve pizzaların miktarına göre ayarlanır. Sipariş verildikten sonra, 'https://reqres.in/api/pizza' API'sine bir istek gönderilir ve sipariş ayrıntılarıyla bir onay sayfası görüntülenir.",
                  materials: ["vercel", "react","router","axios","state management"],
                  viewText: "Github' ta göster",
                  viewLink: "https://github.com/efecihanzengin/netflix-clone-witflix",
                  appText: "Uygulamaya git ->",
                  appLink: "",
                  imgLink: "assets/images/reactPizza.png",
              },
            ],
          },
          footer: {
            h1: "Bir sonraki ürününüz üzerinde birlikte çalışalım.",
            githubText: "Github",
            githubLink: "https://github.com/efecihanzengin",
            personelBlogText: "Personel Blog",
            personelBlogLink: "",
            linkedInText: "Linkedin",
            linkedInLink: "https://www.linkedin.com/in/efe-cihan-zengin-7b2433102/",
            emailText: "Email",
            emailLink: "efecihanzengin@gmail.com",
          }
      }
    }
    export default languagesData;