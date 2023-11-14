<!-- <template>
    <v-footer>
        <v-card
          elevation="0"
          rounded="0"
          width="100%"
          class="bg-grey text-center"
        >
          <v-card-text>
            <v-btn
              class="mx-4"
              icon="fas fa-comment"
              variant="plain"
              color="white"
            ></v-btn>
            <v-btn
              class="mx-4"
              icon="fas fa-university"
              variant="plain"
              color="white"
            ></v-btn>
            <v-btn
              class="mx-4"
              icon="fas fa-wifi"
              variant="plain"
              color="white"
            ></v-btn>
            <v-btn
              class="mx-4"
              icon="fas fa-podcast"
              variant="plain"
              color="white"
            ></v-btn>
          </v-card-text>
  
          <v-card-text class="text-white">
            @ {{ new Date().getFullYear() }} —
            <strong>BAYU HERI All Rights Reserved</strong>
          </v-card-text>
        </v-card>
      </v-footer>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
  .v-footer {
    padding: 8px 0 !important;
  }
  </style> -->

  <template>
    <!-- Footer -->
    
    <MDBFooter :text="['center', 'lg-start', 'muted']" style="background-color: rgba(199, 199, 199, 0.596) !important ; color: rgb(0, 0, 0) !important; font-weight:600; " class=" w-full">
      <!-- Section: Social media -->
      <section
        class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom "
      >
        <!-- Left -->
        <div class="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <!-- Left -->
  
        <!-- Right -->
        <div>
          <!-- <a href="" class="me-4 text-reset ">
            <MDBIcon
              class="link-secondary"
              iconStyle="fab"
              icon="facebook-f"
            ></MDBIcon>
          </a>
          <a href="" class="me-4 text-reset ">
            <MDBIcon
              class="link-secondary"
              iconStyle="fab"
              icon="twitter"
            ></MDBIcon>
          </a> -->
          <a href="https://www.google.com/search?q=bayu+klikada" class=" me-4 text-reset ">
            <MDBIcon
              class="link-secondary"
              iconStyle="fab"
              icon="google"
            ></MDBIcon>
          </a>
          <!-- <a href="#" class="me-4 text-reset">
            <MDBIcon
              class="link-secondary"
              iconStyle="fab"
              icon="instagram"
            ></MDBIcon>
          </a> -->
          <a href="https://www.linkedin.com/in/bayuseptiawan/" target="_blank" class="me-4 text-reset">
            <MDBIcon
              class="link-secondary"
              iconStyle="fab"
              icon="linkedin"
            ></MDBIcon>
          </a>
          <a href="https://github.com/bayuhuhu" target="_blank" class="me-4 text-reset">
            <MDBIcon
              class="link-secondary"
              iconStyle="fab"
              icon="github"
            ></MDBIcon>
          </a>
        </div>
        <!-- Right -->
      </section>
      <!-- Section: Social media -->
  
      <!-- Section: Links  -->
      <section class="">
        <MDBContainer class="text-center text-md-start mt-5">
          <!-- Grid row -->
          <MDBRow class="mt-3">
            <!-- Grid column -->
            <MDBCol md="3" lg="4" xl="3" class="mx-auto mb-4">
              <!-- Content -->
              <h6 class="text-uppercase fw-bold mb-4">
                <i class="fas fa-gem me-3 link-secondary"></i>Byu Project
              </h6>
              <p>
                Dapatkan segera website impian Anda dengan BYU PROJECT.
              </p>
            </MDBCol>
            <!-- Grid column -->
  
            <!-- Grid column -->
            <MDBCol md="2" lg="2" xl="2" class="mx-auto mb-4 ">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <a href="#!" class="text-reset text-decoration-none">Angular</a>
              </p>
              <p>
                <a href="#!" class="text-reset text-decoration-none">React</a>
              </p>
              <p>
                <a href="#!" class="text-reset text-decoration-none">Vue</a>
              </p>
              <p>
                <a href="#!" class="text-reset text-decoration-none">Laravel</a>
              </p>
            </MDBCol>
            <!-- Grid column -->
  
            <!-- Grid column -->
            <MDBCol md="3" lg="2" xl="2" class="mx-auto mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <a  href="#!" class="text-reset text-decoration-none">About</a>
              </p>
              <p>
                <a  href="#!" class="text-reset text-decoration-none">Services</a>
              </p>
              <p>
                <a  href="#!" class="text-reset text-decoration-none">Orders</a>
              </p>
              <p>
                <a  href="https://api.whatsapp.com/send?phone=+6283856644759&text=Halo%20bisakah%20kamu%20menjelaskan%20kepada%20saya%20tentang%20servicemu!.
" target="_blank" class="text-reset text-decoration-none">Help</a>
              </p>
            </MDBCol>
            <!-- Grid column -->
  
            <!-- Grid column -->
            <MDBCol md="4" lg="3" xl="3" class="mx-auto mb-md-0 mb-4">
              <!-- Links -->
              <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
              <p><a class="text-decoration-none text-black" href="https://www.google.com/maps/place/Pulotondo,+Kec.+Ngunut,+Kabupaten+Tulungagung,+Jawa+Timur" target="_blank"><i class="fas fa-home me-3 link-secondary" target="_blank"></i> Tulungagaung , East Java , ID </a>
                
              </p>
              <p>
                <a class="text-decoration-none text-black" href="mailto:bayuheri2709@gmail.com" target="_blank" ><i class="fas fa-envelope me-3 link-secondary" ></i>
                bayuheri2709@gmail.com</a>
                
              </p>
              <p>
                  <a class="text-decoration-none text-black" href="https://api.whatsapp.com/send?phone=+6283856644759&text=Halo%20saya%20tertarik%20dengan%20portofolio%20anda.
" target="_blank"><MDBIcon icon="phone" class="me-3 link-secondary text-decoration-none" />
                  +62-8385-6644-759</a>
                
              </p>
              
            </MDBCol>
            <!-- Grid column -->
          </MDBRow>
          <!-- Grid row -->
        </MDBContainer>
      </section>
      <!-- Section: Links  -->
  
      <!-- Copyright -->
      <div
        class="text-center p-4"
        style="background-color: rgba(0, 0, 0, 0.05)"
      >
        © 2021 Copyright : Bayu Heri Septiawan
        
      </div>
      <!-- Copyright -->
    </MDBFooter>
    <!-- Footer -->

  </template>
  <script>
    import { MDBFooter, MDBIcon, MDBRow, MDBCol, MDBContainer } from "mdb-vue-ui-kit";
  
    export default {
      components: {
        MDBFooter,
        MDBIcon,
        MDBRow,
        MDBCol,
        MDBContainer
      }
    }
  </script>