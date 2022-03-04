<script >
import Slider from "./Slider.vue";
export default {
  data() {
    return {
      buyer: true,
    };
  },
  methods: {
    toggleBuyer() {
      this.buyer = !this.buyer;
    },
  },
};
</script>

<template>
  <section
    class="lg:mx-32 mx-8 lg:flex justify-evenly mt-20"
    data-aos="fade-down"
  >
    <div class="lg:text-left text-center">
      <div
        class="
          lg:text-5xl
          text-4xl
          lg:w-3/4 lg:leading-relaxed
          font-bold
          text-blue
        "
      >
        Safer Transactions Happy People
      </div>
      <p class="text-sm lg:w-4/5 my-8">
        Transact Securely with online vendors & marketplaces, gain customers
        trust with TrustPaddi
      </p>
      <img
        src="../assets/mocups/pointer.png"
        class="absolute w-20 top-96 lg:left-80 right-5"
        alt=""
      />
      <input
        type="button"
        value="Get Started"
        class="px-10 bg-blue mt-16 p-3 rounded-3xl text-white text-sm"
      />
    </div>
    <div class="lg:w-3/5 lg:my-0 my-8">
      <img class="w-screen" src="../assets/man-with-phone.png" alt="" />
    </div>
  </section>
  <section class="my-20 lg:mx-32 mx-8">
    <img src="../assets/mocups/bard.png" class="absolute w-32 left-0" alt="" />
    <div class="text-3xl font-bold text-dark-orange text-center mb-5">
      The Problem
    </div>
    <div class="lg:flex justify-between mt-20" data-aos="fade-up">
      <div class="my-auto">
        <div class="flex my-5">
          <img
            class="w-16 h-16"
            src="../assets/emoji/FemaleMemojis.png"
            alt=""
          />
          <div class="text-sm w-80 p-2">
            Trust issues between online vendors and there potential customers
            online
          </div>
        </div>
        <div class="flex my-5">
          <div class="text-sm w-80 p-2">
            There have been an alarming Rate of online scams
          </div>
          <img class="w-16 h-16" src="../assets/emoji/MaleMemojis.png" alt="" />
        </div>
        <div class="flex my-5">
          <img
            class="w-16 h-16"
            src="../assets/emoji/FemaleMemojis1.png"
            alt=""
          />
          <div class="text-sm w-80 p-2">
            COD Risks, and Stress associated with the whole process of selling
            online
          </div>
        </div>
      </div>
      <div class="">
        <img class="lg:w-96" src="../assets/woman-with-phone.png" alt="" />
      </div>
    </div>
  </section>
  <section class="py-20 lg:px-28 linear" data-aos="fade-down">
    <div class="text-3xl font-bold text-center mt-5 text-blue">
      Introducing Trustpaddi
    </div>
    <p class="text-center text-xs text-gray">
      The safest and surest way to transact
    </p>
    <div class="lg:flex mt-16">
      <div class="w-80 m-8">
        <img src="../assets/icons/pay-dollar.png" alt="" />
        <div class="text-lg font-bold my-3 text-blue">Escrow Payment</div>
        <div class="text-gray">
          We offer an escrow payment platform that bridge the trust issues
          between sellers and there potential online customers
        </div>
      </div>
      <div class="w-80 m-8">
        <img src="../assets/icons/dashboard.png" alt="" />
        <div class="text-lg font-bold my-3 text-blue">
          Order Management System
        </div>
        <div class="text-gray">
          We have an order management system, order fulfilment system and sales
          tracking system all in one platform to make online selling easy and
          stress-free.
        </div>
      </div>
      <div class="w-80 m-8">
        <img src="../assets/icons/pay-dollar.png" alt="" />
        <div class="text-lg font-bold my-3 text-blue">No Cash Risk</div>
        <div class="text-gray">
          An easier solution for sellers to make sales to prospective buyers
          outside there reach (States) without having to deal with the risk
          associated with cash on delivery
        </div>
      </div>
    </div>
    <div class="mx-auto lg:w-2/5 w-3/5 mt-10">
      <img src="../assets/celebration.png" alt="" />
    </div>
  </section>
  <section class="lg:px-28 px-5 py-8 works" data-aos="fade-up">
    <div class="text-3xl font-bold text-center mt-5 text-blue">
      How it Works
    </div>
    <p class="text-center text-xs text-gray">
      The whole process is Simple, transparent and automated
    </p>
    <div class="text-center my-5">
      <input
        type="button"
        value="BUYER"
        class="p-3 px-10 font-bold text-blue rounded-3xl mx-5"
        :class="buyer && 'bg-orange'"
        @click="toggleBuyer"
      />
      <input
        type="button"
        value="SELLER"
        class="p-3 px-10 font-bold text-blue rounded-3xl mx-5"
        @click="toggleBuyer"
        :class="buyer === false && 'bg-orange'"
      />
    </div>
    <div class="lg:flex mt-8 justify-between text-gray">
      <div v-if="buyer" class="lg:w-1/2">
        <div class="flex my-8">
          <div
            class="
              rounded-3xl
              px-4
              py-2
              border-2 border-dark-orange
              text-dark-orange
              bg-orange
              h-11
            "
          >
            1
          </div>
          <div class="text-sm ml-5">
            Buyer and seller agree on the terms of the transaction; Eg Price,
            duration, proposed delivery date etc.
          </div>
        </div>
        <div class="flex my-8">
          <div
            class="
              rounded-3xl
              px-4
              py-2
              border-2 border-dark-orange
              text-dark-orange
              bg-orange
              h-11
            "
          >
            2
          </div>
          <div class="text-sm ml-5">
            Buyer Initiates (Begins) the escrow; either parties can creates an
            escrow transaction.
          </div>
        </div>
        <div class="flex my-8">
          <div
            class="
              rounded-3xl
              px-4
              py-2
              border-2 border-dark-orange
              text-dark-orange
              bg-orange
              h-11
            "
          >
            3
          </div>
          <div class="text-sm ml-5">
            Buyer pays to TrustPaddi; TrustPaddi holds on to the payment.
          </div>
        </div>
        <div class="flex my-8">
          <div
            class="
              rounded-3xl
              px-4
              py-2
              border-2 border-dark-orange
              text-dark-orange
              bg-orange
              h-11
            "
          >
            4
          </div>
          <div class="text-sm ml-5">
            Merchandise is shipped to the buyer; Seller ships the merchandise to
            you or we help you retrieve the merchandise and deliver it to you.
          </div>
        </div>
        <div class="flex my-8">
          <div
            class="
              rounded-3xl
              px-4
              py-2
              border-2 border-dark-orange
              text-dark-orange
              bg-orange
              h-11
            "
          >
            5
          </div>
          <div class="text-sm ml-5">
            Buyer confirms the merchandise ; He/she verifies the product to see
            if its exactly what he ordered.
          </div>
        </div>
        <div class="flex my-8">
          <div
            class="
              rounded-3xl
              px-4
              py-2
              border-2 border-dark-orange
              text-dark-orange
              bg-orange
              h-11
            "
          >
            6
          </div>
          <div class="text-sm ml-5">
            TrustPaddi Pays the Seller after successful transaction
            confirmation.
          </div>
        </div>
      </div>
      <div v-else class="lg:w-1/2">
        <div class="flex my-8">
          <div
            class="
              rounded-3xl
              px-4
              py-2
              border-2 border-dark-orange
              text-dark-orange
              bg-orange
              h-11
            "
          >
            1
          </div>
          <div class="text-sm ml-5">
            Buyer and seller agree on the terms of the transaction; Eg Price,
            duration, proposed delivery date etc.
          </div>
        </div>
        <div class="flex my-8">
          <div
            class="
              rounded-3xl
              px-4
              py-2
              border-2 border-dark-orange
              text-dark-orange
              bg-orange
              h-11
            "
          >
            2
          </div>
          <div class="text-sm ml-5">
            Seller Initiates (Begins) the escrow; either parties can creates an
            escrow transaction.
          </div>
        </div>
        <div class="flex my-8">
          <div
            class="
              rounded-3xl
              px-4
              py-2
              border-2 border-dark-orange
              text-dark-orange
              bg-orange
              h-11
            "
          >
            3
          </div>
          <div class="text-sm ml-5">
            Buyer accepts the transaction & pays to TrustPaddi; TrustPaddi holds
            on to the payment.
          </div>
        </div>
        <div class="flex my-8">
          <div
            class="
              rounded-3xl
              px-4
              py-2
              border-2 border-dark-orange
              text-dark-orange
              bg-orange
              h-11
            "
          >
            4
          </div>
          <div class="text-sm ml-5">
            Merchandise is shipped to the buyer; Seller ships the merchandise or
            we can help retrieve the merchandise from you (The Seller) & deliver
            it to the buyer.
          </div>
        </div>
        <div class="flex my-8">
          <div
            class="
              rounded-3xl
              px-4
              py-2
              border-2 border-dark-orange
              text-dark-orange
              bg-orange
              h-11
            "
          >
            5
          </div>
          <div class="text-sm ml-5">
            Buyer confirms the merchandise ; He/she verifies the product to see
            if its exactly what he ordered.
          </div>
        </div>
        <div class="flex my-8">
          <div
            class="
              rounded-3xl
              px-4
              py-2
              border-2 border-dark-orange
              text-dark-orange
              bg-orange
              h-11
            "
          >
            6
          </div>
          <div class="text-sm ml-5">
            TrustPaddi Pays the Seller after successful transaction
            confirmation.
          </div>
        </div>
      </div>
      <div class="relative">
        <img
          class="lg:w-3/4 lg:ml-auto lg:mt-16 -0"
          src="../assets/shopping.png"
          alt=""
        />
      </div>
    </div>
  </section>
  <section class="bg-who lg:px-32 py-20 relative" data-aos="fade-down">
    <div class="text-3xl text-bold text-center text-white my-3">
      Who can use Trustpaddi
    </div>
    <img
      src="../assets/mocups/who-top.png"
      class="absolute top-0 left-0"
      alt=""
    />
    <img
      src="../assets/mocups/footer-bottom.png"
      class="absolute bottom-0 right-0"
      alt=""
    />

    <div class="lg:flex my-8">
      <div class="m-5 text-white lg:w-1/2">
        <div class="text-dark-orange text-xs">INDIVIDUALS</div>
        <div class="text-xl text-white font-bold my-1">Peer 2 Peer</div>
        <div class="my-3 text-sm">
          Anyone can use TrustPaddi especially when it comes to making
          transactions with unknown online vendors, service providers or with
          people whom you haven't done business with before.
        </div>
      </div>
      <div class="m-5 text-white lg:w-1/2">
        <div class="text-dark-orange text-xs">BUSINESSES</div>
        <div class="text-xl text-white font-bold my-1">Sellers and Vendors</div>
        <div class="my-3 text-sm">
          Any Business owner can use TrustPaddi, with our escrow services you
          can gain the Trust and Reliability that big brands enjoy, boost your
          sales, avoid the risk associated with cash on delivery (COD), attend
          to as much order as you want and enjoy peace of mind knowing you will
          get paid instantly without stories.
        </div>
      </div>
      <div class="m-5 text-white lg:w-1/2">
        <div class="text-dark-orange text-xs">E-COMMERCE</div>
        <div class="text-xl text-white font-bold my-1">Online marketplaces</div>
        <div class="my-3 text-sm">
          Any Business owner can use TrustPaddi, with our escrow services you
          can gain the Trust and Reliability that big brands enjoy, boost your
          sales, avoid the risk associated with cash on delivery (COD), attend
          to as much order as you want and enjoy peace of mind knowing you will
          get paid instantly without stories.
        </div>
      </div>
    </div>
    <div class="text-center">
      <input
        type="button"
        value="Get Started"
        class="p-3 bg-white rounded-3xl px-16 text-blue"
      />
    </div>
  </section>
  <section class="my-24 testimonials mx-auto lg:w-9/12" data-aos="fade-down">
    <div class="">
      <Slider />
    </div>
  </section>
  <section>
    <div class="lg:w-8/12 p-8 rounded-3xl mx-auto safe" data-aos="flip-up">
      <div class="text-3xl font-bold text-center my-5 text-blue">
        Better safe than sorry
      </div>
      <div class="text-center">
        <input
          type="button"
          value="Get Started"
          class="p-3 bg-blue rounded-3xl px-16 text-white"
        />
      </div>
    </div>
  </section>
</template>

<style>
.linear {
  background: linear-gradient(
    181.9deg,
    #f4f0ff 64.77%,
    rgba(244, 240, 255, 0) 101.34%
  );
}
.works {
  background: linear-gradient(
    6.24deg,
    #fef9f1 76.75%,
    rgba(255, 255, 255, 0.74) 99.26%
  );
}
.safe {
  background: linear-gradient(
    99.01deg,
    #dbccff 32.52%,
    rgba(219, 204, 255, 0.63) 48.95%,
    rgba(250, 214, 158, 0.2) 63.34%,
    rgba(250, 214, 158, 0.3) 79.39%
  );
}
.testimonials {
  background: url("../assets/map.png");
}
</style>
