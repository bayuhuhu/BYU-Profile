<template>
  <v-app id="home">
    <NavBar />
    <v-container fluid>
      <div class="head">
        <v-row>
          <v-col cols="5">
            <div class="mt-16" style="position: relative">
              <h1 class="text-grey">Hello,</h1>
              <h1 class="text-white">I'M <span class="text sec-text">Bayu Septiawan</span></h1>
              
              
              <span class="text-gray">Web Designer & Developmer </span><br />
             <v-btn title dark class="text-yellow mt-8" variant="outlined "
                  >Contact Me</v-btn
                >
            </div>
          </v-col>
          <v-col cols="2">
            <div
              style="
                position: absolute;
                z-index: 99;
                bottom: 0;
                margin-left: auto;
                margin-right: auto;
                right: 0;
                left: 0;
                text-align: center;
              "
              class="mt-16"
            >
             <v-icon aria-label="ikon" @click="about('about')">fas fa-angle-double-down</v-icon>
            </div>
          </v-col>
          <v-col cols="5">
            <div class="mt-16" style="position: relative; z-index: 999">
              <v-img src="byu.ico" alt="byu-img" contain max-height="250"></v-img>
            </div>
          </v-col>
        </v-row>
      </div>
      <v-col cols="12" class="mt-16" id="about">
        <div class="">
          <v-row>
            <v-col cols="12" sm="6">
              <div class="egg pt-9">
                <v-img src="bayu.png" alt="byu-img" max-height="200"></v-img>
              </div>
            </v-col>
            <v-col cols="12" sm="6">
              <h3 class="mt-16 desc">About Me</h3>
              <!-- <div style="width: 120px">
                <v-slider
                  v-model="slider2"
                  color="yellow"
                  label="track-color"
                ></v-slider>
              </div> -->

              <h4 class="mt-4 desc">
                I'm Creative and Smart Creature God Ever Create
              </h4>
              <hr width="90%" />
              <br />
              <p class="text-black desc">
                "Dalam perjalanan takdir yang penuh misteri, saya, "Bayu
                Septiawan," merasa diberkati dengan karunia yang luar biasa.
                Seperti aliran air yang mengikuti jalan menuju lautan,
                langkah-langkah saya membawa saya ke jalur pendidikan di jurusan
                Rekayasa Perangkat Lunak (RPL) di SMKN 1 Boyolangu. Ini adalah
                suatu keajaiban yang luar biasa dalam perjalanan hidup saya.<br /><br />

                Namun, saya percaya bahwa takdir yang terjalin bukanlah sekadar
                benang acak. Ini adalah kisah hidup saya yang teranyam oleh
                tangan takdir, menjadi bab yang indah dalam buku perjalanan
                waktu. Jurusan RPL menjadi panggung di mana impian-impiam
                bertransformasi menjadi kenyataan, seperti bintang-bintang yang
                menerangi langit malam.<br /><br />

                Setiap harinya, di dalam ruang kelas yang sejuk, saya merasakan
                cahaya ilmu yang menerangi hati saya. Seperti dedaunan yang
                berdansa bersama angin, pengetahuan datang dan pergi, membuka
                jendela menuju dunia yang sebelumnya tak terlihat oleh mata
                saya. Saya merasa seperti seorang penjelajah, melangkah di tanah
                yang penuh misteri dan peluang.<br /><br />

                RPL, singkatan yang membawa makna dalam hidup saya. Jurusan ini
                adalah pintu gerbang menuju masa depan yang cerah, serta jalan
                menuju penemuan diri yang lebih dalam dan potensi tersembunyi.
                Di sinilah saya menemukan bakat-bakat terpendam, mengasah
                kemampuan-kemampuan yang selama ini tertidur dalam diri saya.<br /><br />

                Saya, "Bayu Septiawan," nama saya yang terukir dalam sejarah
                SMKN 1 Boyolangu. Saya menyaksikan matahari terbit di cakrawala
                baru yang semakin terang. Setiap langkah yang saya ambil, setiap
                saat yang berlalu, saya merasa menjadi bagian tak terpisahkan
                dari kisah epik ini. Dalam keajaiban ini, saya menyadari bahwa
                hidup adalah perpaduan seni dan teknologi yang luar biasa,
                membentuk lukisan abadi yang merupakan kisah hidup saya.<br /><br />
              </p>
            </v-col>
          </v-row>
        
          <v-btn tile aria-label="about me" width="max-content" style="padding: 10px ;" dark color="yellow" to="/about"  class="mt-4 mx-auto d-block p-6">
                  About Me
          </v-btn>
        </div>
        <br />
        <hr style="width: 70%; margin: auto; border: 2px solid black" />
      </v-col>
      <div class="text-center mt-4" id="portofolio">
        <h2>What We Do</h2>
      <v-col cols="12" class="padd mb-4" >
        <div class="first" id="project">
          <v-row>
            <v-col cols="12">
              <div class="child">
                <v-btn
                aria-label="web development"
                  icon="fas fa-laptop"
                  color="rgb(232, 204, 65)"
                  class="text-white"
                ></v-btn>
                <h3 class="ml-3 mt-4">Web Development</h3>
                <p
                  class="text-black  ml-3 mt-4 text-caption"
                  style="width: 250px"
                >
                  Saya memiliki pengalaman dalam pengembangan web yang kuat,
                  menciptakan situs web yang fungsional dan menarik untuk
                  berbagai kebutuhan bisnis.
                </p>
              </div>
              <div class="child">
                <v-btn
                aria-label="mobile web dev"
                  icon="fas fa-mobile-alt"
                  color="rgb(232, 204, 65)"
                  class="text-white"
                ></v-btn>
                <h3 class="ml-3 mt-4">Mobile Web Dev</h3>
                <p
                  class="text-black  ml-3 mt-4 text-caption"
                  style="width: 250px"
                >
                  Saya telah mengembangkan aplikasi mobile yang responsif dan
                  inovatif, menciptakan pengalaman pengguna yang optimal di
                  berbagai perangkat seluler.
                  <!-- <br /> -->
                </p>
              </div>
              <div class="child" >
                <v-btn
                aria-label="pwa developer"
                  icon="fas fa-camera "
                  color="rgb(232, 204, 65)"
                  class="text-white"
                ></v-btn>
                <h3 class="ml-3 mt-4">Progressive Web Apps</h3>
                <p
                  class="text-black  ml-3 mt-4 text-caption"
                  style="width: 250px"
                >
                  Saya memiliki pengalaman dalam mengembangkan Progressive Web
                  Apps (PWA) yang memungkinkan situs web untuk berfungsi seperti
                  aplikasi.
                  <!-- , meningkatkan keterlibatan pengguna dan kinerja. -->
                </p>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </div>
      <v-col id="services" cols="12" sm="12">
        <div class="d-flex co mb-6 justify-center">
          <v-btn color="rgb(232, 204, 65)" class="mr-2">ALL</v-btn>
          <v-btn variant="tonal" class="mr-2">Web Design</v-btn>
          <v-btn variant="tonal" class="mr-2">Redesign Web</v-btn>
          <v-btn variant="tonal" class="mr-2">Web Maintenance</v-btn>
          <v-btn variant="tonal">SEO Optimaion</v-btn>
        </div>
      </v-col>
      <v-col class="imgHover" cols="12">
        <v-row class="fill-height" align="center" justify="center">
          <template v-for="(item, i) in items" :key="i">
            <v-col col="12" md="4" class="imgcol">
              <v-hover v-slot="{ isHovering, props }">
                <v-card
                  :elevation="isHovering ? 12 : 2"
                  class="{'on-hover' : isHovering }"
                  v-bind="props"
                >
                  <v-img
                    class="img-mobile"
                    :src="item.img"
                    height="225px"
                    cover
                  ></v-img>
                </v-card>
              </v-hover>
            </v-col>
          </template>
        </v-row>
      </v-col>
      <v-col cols="12" sm="12">
        <div class="d-flex justify-center mb-6">
          <v-btn color="#FBDF7E" class="mt-4">Load More</v-btn>
        </div>
      </v-col>
      <v-col id="page" cols="12" style="margin-bottom: 10vh">
        <div class="pre">
          <v-row class="pg">
            <v-col sm="4" cols="12">
              <v-card
                class="mw-auto"
                max-width="344"
                style="padding-bottom: 20px"
              >
                <v-img src="unggul.jpg" height="200px" cover></v-img>
                <v-card-title>We Provide You The Best </v-card-title>
                <v-card-subtitle> by BAYU HERI | 27 Sep 2023 </v-card-subtitle>
                <v-card-text
                  >Di sini, kami berkomitmen untuk memberikan yang terbaik dalam
                  segala hal, menjadi solusi yang Anda cari untuk kebutuhan
                  Anda, dan hadir dengan kualitas tak tertandingi untuk memenuhi
                  harapan Anda.</v-card-text
                >
              </v-card>
            </v-col>
            <v-col sm="4" cols="12">
              <v-card class="mw-auto" max-width="344" height="">
                <v-img src="quality.jpg" height="200px" cover></v-img>
                <v-card-title>Unmatched Quality, Every Time </v-card-title>
                <v-card-subtitle> by BAYU HERI | 27 Sep 2023 </v-card-subtitle>
                <v-card-text
                  >Di sini, kami memberikan yang terbaik tanpa kompromi. Kami
                  bangga memberikan kualitas yang tak tertandingi dalam setiap
                  layanan yang kami tawarkan. Percayakan kebutuhan Anda kepada
                  kami, dan saksikan perbedaan yang kami hasilkan.</v-card-text
                >
              </v-card>
            </v-col>
            <v-col sm="4" cols="12">
              <v-card class="mw-auto" max-width="344" height="">
                <v-img src="memuaskan.jpg" height="200px" cover></v-img>
                <v-card-title>Excellence Beyond Expectations </v-card-title>
                <v-card-subtitle> by BAYU HERI | 27 Sep 2023 </v-card-subtitle>
                <v-card-text
                  >Kami selalu berusaha untuk melebihi harapan. Dalam setiap
                  proyek dan layanan, kami menciptakan keunggulan yang melebihi
                  apa yang Anda bayangkan. Pengalaman Anda dengan kami akan
                  mengubah cara Anda melihat solusi dan layanan.</v-card-text
                >
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-col cols="12" id="hire">
        <div class="hire">
          <v-row>
            <v-col cols="12" sm="8">
              <h1 class="mt-9">Hire Me for Awsome Project</h1>
              <p class="text-gray">
                Saya siap menjadi bagian dari proyek web yang mengagumkan. Hire
                me!
              </p>
            </v-col>
            <v-col cols="12" sm="4">
              <v-btn class="mt-15" color="rgb(241, 197, 17)">Hire Me</v-btn>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-col class="px-16"  cols="12" sm="12">
          <v-col cols="12" sm="8" class=" mx-auto d-block">
            <form method="POST" @submit.prevent="submit" >
            <h1 class="mt-8">Send Your Massage</h1>
            <v-driver></v-driver>
            <span  
              >Agar proyek berjalan dengan serius, dapatkah kami meminta
              sejumlah uang muka sebesar seratus?
              <br  />
             Berikan kabar secepat kilat, dan kami akan memberikan situs web yang lebih memuaskan daripada cokelat dingin di hari yang panas!
            </span>
            <v-row class="mt-10">
              <v-col cols="12" sm="6">
                <v-text-field
                id="name"
                  label="Name"
                  v-model="name"
                  type="text"
                  persistent-hint
                  variant="outlined"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                id="phone"
                  label="Phone No"
                  required 
                  v-model="phone"
                  persistent-hint
                  variant="outlined"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-col cols="18" sm="18">
                <v-text-field
                id="email"
                  label="Email"
                  required 
                  type="email"
                  v-model="email"
                  persistent-hint
                  variant="outlined"
                ></v-text-field>
              </v-col>
            <v-textarea
            id="message"
              label="Message"
              required 
              type="text"
              v-model="message"
              persistent-hint
              variant="outlined"
            ></v-textarea>
            <v-btn color="#FBDF7E" type="submit" class="mt-2">Submit Now</v-btn>
          </form>
          </v-col>
        
      </v-col>
    </v-container>
    <FooterView id="contact" />
  </v-app>
</template>

<script>
import { defineComponent } from "vue";

// Components

import NavBar from "@/components/NavBar.vue";
import FooterView from "@/components/FooterView.vue";
// import axios from "axios";
export default defineComponent({
  name: "HomeView",
  setup() {
    return {
      slider2: 50,
      items: [
        {
          img: "forum.jpg",
        },
        {
          img: "forum2.jpg",
        },
        {
          img: "js.jpg",
        },
        {
          img: "hotel.jpg",
        },
        {
          img: "hotel2.jpg",
        },
        {
          img: "js2.jpg",
        },
      ],
    };
  },

  components: {
    NavBar,
    FooterView,
  },
  data(){
  return{
    name :"",
    phone : "",
    email : "",
    message : "",

    // telegram bot
    token: "6442610284:AAGhpoEcJhNHy-AxnNmXn6m8AIrjoDwlRYY",
    chtId: -1002070233667
  }
},
methods: {
  submit(){
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const url = "https://api.whatsapp.com/send?phone=+6283856644759&text=Halo%20Admin%20Saya:%20*" + name + "*%0APhone%20Saya:%20*" + phone + "*%0AEmail%20Saya:%20*" + email + "*%0A%0A*" + message + "*";
    window.open(url);
    // let pesan = `Full Name : ${this.name}\n , Email : ${this.email}\n , Phone Number : ${this.phone}\n , Message : ${this.message}`
    // axios.post(`https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chtId}&text=${pesan}`)
    // .then(response => {
    //     alert("Message Sent !!!", response);
    //   })
    //   .catch(error => {
    //     alert("Error: " + error);
    //   });
  },
  about(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },
}, 
mounted () {
  const text = document.querySelector(".sec-text");
        const textLoad = () => {
            setTimeout(() => {
                text.textContent = "Bayu Septiawan";
            }, 0);
             //1s = 1000 milliseconds
        }
        textLoad();
        setInterval(textLoad, 12000);
}
});

</script>
<style scoped>
.v-container {
  padding: 16px 0;
}

.head {
  position: relative;
  text-align: center;
  padding: 17px;
  margin-bottom: 6px;
  height: 400px;
  width: 100%;
  color: white;
}

.head::before {
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  margin-top: -52px;
  height: 110%;
  width: 50%;
  background: black;
  transform: skew(0deg, 6deg);
}

.head::after {
  content: " ";
  position: absolute;
  top: 0;
  right: 0;
  margin-top: -52px;
  height: 110%;
  width: 50%;
  background: black;
  transform: skew(0deg, -6deg);
}

.egg {
  display: block;
  margin-left: 100px;
  margin-top: 50px;
  width: 356px;
  height: 300px;
  background-color: rgb(232, 204, 65);
  border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
}
#about {
  padding: 20px;
}

.first {
  width: 100%;
  height: 280px;
  text-align: center;
  padding: 2rem 2rem;
}

.child {
  display: inline-block;
  padding: 2rem 1rem;
  vertical-align: middle;
  text-align: center;
  margin-right: 8px;
}

@media only screen and (max-width: 768px) {
  .first {
    height: auto;
    padding: 1rem;
  }

  .egg {
    margin: auto;
  }

  .child {
    margin: auto;
    width: auto;
    height: auto;
  }

  .desc {
    padding: 1rem;
  }
  .co {
    flex-direction: column;
    align-items: center;
  }

  .mr-2 {
    margin-bottom: 10px;
  }
  .imgHover {
    padding: 0;
  }
  .imgcol {
    flex-basis: unset;
    flex-grow: 1;
    max-width: 100%;
  }
  .pg {
    width: auto;
    padding: 0;
  }
  .hire {
    padding: 0 20px;
  }
  #page {
    margin-bottom: 140vh !important;
  }
  .tn {
    display: flex;
    align-content: end;
  }
}

.imgHover {
  padding: 0 10%;
}

.pre {
  width: auto;
  height: 380px;
  text-align: center;
  padding: 0 10% 0 10%;
  background-color: hsl(0, 0%, 100%);
}

.hire {
  width: 100%;
  height: auto;
  padding: 0 10% 20px 10%;
  background-color: aliceblue;
}
.text.sec-text:before{
    content: "";
    position: absolute;
    top: 32%;
    left: 40%;
    height: 20%;
    width: 100%;
    background-color: #000000;
    border-left: 2px solid #000000;
    animation: animate 7s steps(14) infinite;
}
@keyframes animate{
  40%, 60% {
    left: calc(79% + 3px); 
  }
  100% {
    left: 27%;
  }
}
</style>
