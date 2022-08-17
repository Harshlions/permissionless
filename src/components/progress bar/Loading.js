import React from 'react'
import "./Loading.css";
import Cursor from './Cursor';
export default function Loading() {
  return (
   <>
   
    <div className="container">
   
      <h1>congratulation, now u are officially</h1><svg width="135" height="50" viewBox="0 0 126 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.7532 17.4952C24.414 16.0328 25.9838 14.4692 27.4535 12.8133C28.6033 11.4946 29.7402 10.0718 30.4653 8.46697C31.0118 7.26269 31.4158 5.83211 30.947 4.53159C30.1364 2.28429 27.6322 1.62883 25.5397 1.17365C23.0347 0.597034 20.459 0.392844 17.8949 0.567608C15.5627 0.758568 13.2625 1.23461 11.0451 1.98517C7.68594 3.13424 4.50604 4.7561 1.60045 6.8023C1.39068 6.94796 1.18351 7.09362 0.978921 7.24448C0.761916 7.3799 0.604769 7.59362 0.539751 7.84177C0.474733 8.08992 0.50678 8.35365 0.62931 8.57881C0.888281 9.00018 1.53053 9.23688 1.95783 8.92735C2.98163 8.18692 4.03737 7.49331 5.12504 6.84652C5.87088 6.40781 6.63053 5.99338 7.40398 5.60322C7.81661 5.39861 8.23269 5.20006 8.65222 5.00758C8.86199 4.91135 9.07435 4.81771 9.2867 4.72667L9.36957 4.69286L9.4628 4.65384L9.83572 4.50038C11.8251 3.69277 13.8961 3.10495 16.0122 2.74728C16.1442 2.72387 16.2711 2.70306 16.4136 2.68485L16.6907 2.64584C16.9885 2.60682 17.2863 2.58081 17.5919 2.547C18.1858 2.49151 18.7797 2.45856 19.3736 2.44816C20.5215 2.42542 21.6694 2.48976 22.8076 2.64064C24.0129 2.8172 25.2064 3.06736 26.3814 3.38974C26.6317 3.45736 26.8803 3.53279 27.1272 3.61603L27.4768 3.74608L27.5441 3.77209L27.6995 3.84232C27.9065 3.93801 28.1064 4.0484 28.2977 4.17265L28.435 4.26369L28.4946 4.31051L28.5515 4.35993C28.6007 4.40414 28.6499 4.44836 28.6966 4.49518C28.7432 4.542 28.8053 4.61223 28.8571 4.67465C28.8416 4.67465 28.9659 4.84112 28.9918 4.88273C29.0177 4.92435 29.0436 4.98678 29.0747 5.0492C29.1057 5.11163 29.1031 5.12463 29.1109 5.14024C29.1441 5.24692 29.1709 5.35549 29.1912 5.46537C29.1912 5.52779 29.2093 5.60582 29.2119 5.66565C29.2184 5.78868 29.2184 5.91197 29.2119 6.035C29.2119 6.06621 29.2119 6.09482 29.2119 6.12343V6.13904V6.23788C29.2119 6.27429 29.2119 6.28469 29.2119 6.27949C29.1574 6.55368 29.0847 6.82392 28.9944 7.08842C28.9659 7.16905 28.9374 7.24708 28.9063 7.32771C28.8988 7.34897 28.8902 7.36981 28.8804 7.39014C28.8131 7.5358 28.7484 7.68666 28.6758 7.83231C28.5075 8.16525 28.3236 8.48778 28.1268 8.8051C27.93 9.12243 27.6918 9.47097 27.4613 9.7935L27.28 10.038C27.2645 10.0588 27.1738 10.1759 27.1427 10.2201L27.0003 10.3995C26.9174 10.5062 26.832 10.6102 26.7413 10.7169C25.4013 12.3007 23.9546 13.7903 22.4113 15.1751C20.034 17.3807 17.553 19.4252 15.0151 21.3915C15.0289 20.1378 15.0333 18.8833 15.0281 17.6278C15.0281 15.2869 14.9918 12.946 14.751 10.6206C14.6495 9.31433 14.4232 8.02086 14.0751 6.75808C13.977 6.35755 13.8208 5.97368 13.6115 5.61883C13.4767 5.40082 13.2637 5.24312 13.0165 5.17826C12.7693 5.11341 12.5067 5.14635 12.283 5.27029C12.062 5.40207 11.9014 5.61587 11.836 5.86552C11.7706 6.11517 11.8056 6.38065 11.9334 6.60462C11.9677 6.65546 11.9972 6.70946 12.0214 6.76589L12.037 6.7971C12.0784 6.90894 12.1198 7.02079 12.1561 7.13524C12.268 7.48658 12.3622 7.84338 12.4384 8.20426C12.4928 8.46437 12.542 8.70626 12.586 8.95856C12.6093 9.10422 12.6352 9.25248 12.6559 9.39814C12.6689 9.47617 12.6792 9.5542 12.6922 9.63223C12.7051 9.71027 12.7051 9.73368 12.7129 9.7857C12.9752 12.1528 13.098 14.5335 13.0806 16.9151C13.0962 18.9023 13.0901 20.8895 13.0625 22.8767C12.3529 23.4108 11.6399 23.9423 10.9234 24.4712C10.421 24.8405 9.916 25.209 9.40842 25.5766C9.19141 25.712 9.03427 25.9258 8.96925 26.1739C8.90423 26.4221 8.93628 26.6858 9.05881 26.9109C9.31778 27.3323 9.96003 27.5716 10.3899 27.2621C11.2687 26.624 12.144 25.9806 13.0159 25.3321C12.9624 27.7181 12.876 30.1024 12.7569 32.485C12.6973 33.6763 12.6248 34.8675 12.5238 36.0562C12.4824 36.5244 12.4384 36.99 12.3814 37.4582C12.3814 37.5544 12.2959 37.9186 12.3814 37.5336C12.3633 37.622 12.3555 37.7157 12.3426 37.7937C12.3192 37.9498 12.2934 38.1058 12.2623 38.2593C12.1944 38.5096 12.2262 38.7766 12.3509 39.0038C12.4756 39.231 12.6835 39.4006 12.9304 39.4766C13.4121 39.5858 14.0207 39.3283 14.1243 38.7951C14.4661 37.0316 14.5438 35.2031 14.6422 33.4161C14.7924 30.8151 14.8779 28.2141 14.94 25.613C14.9521 25.0252 14.9642 24.4391 14.9763 23.8547C17.6463 21.8285 20.2567 19.7295 22.7532 17.4952Z" fill="#A9FF1C"/>
<path d="M29.1887 6.12866C29.1756 6.15028 29.1671 6.17433 29.1635 6.19936C29.1599 6.2244 29.1615 6.24989 29.168 6.27432V6.24051C29.1726 6.20283 29.1795 6.16547 29.1887 6.12866Z" fill="#A9FF1C"/>
<path d="M60.7078 20.3121C60.5009 20.2621 60.2836 20.2786 60.0866 20.3593C59.8895 20.4401 59.7227 20.581 59.6098 20.7621C59.4311 21.0014 59.4285 21.3994 59.3741 21.6933C59.3016 22.0808 59.2136 22.4736 59.1151 22.8481C59.0608 23.0406 58.9908 23.2305 58.9261 23.4204V23.449L58.8717 23.5634C58.8277 23.6545 58.7759 23.7377 58.7293 23.8235L58.7034 23.8704C58.6723 23.9094 58.6386 23.9484 58.605 23.9848C58.5315 24.0646 58.4528 24.1394 58.3693 24.2085H58.3486L58.2295 24.2865C58.1089 24.3647 57.9825 24.4334 57.8514 24.492H57.8203C57.7737 24.5076 57.7296 24.5258 57.683 24.5388C57.5587 24.5804 57.4241 24.6038 57.3101 24.6377L57.2247 24.6533H57.1418C56.9941 24.6737 56.8454 24.6859 56.6964 24.6897H56.6109L56.5151 24.6715C56.3933 24.6423 56.2732 24.6067 56.1551 24.5648H56.1422L56.0179 24.505C55.9013 24.4426 55.79 24.3776 55.6812 24.3047L55.5284 24.1877C55.4637 24.1331 55.3989 24.0784 55.3368 24.0212C55.1949 23.8879 55.0601 23.7472 54.9328 23.5998C54.6647 23.3077 54.4334 22.9836 54.2439 22.6349C54.1688 22.4996 54.0989 22.3591 54.0367 22.2161C53.9901 22.112 54.0367 22.1979 54.0367 22.2161C54.0056 22.1407 53.9798 22.0652 53.9539 21.9898C53.8705 21.752 53.8039 21.5087 53.7544 21.2615C53.7311 21.1523 53.7182 21.0404 53.6949 20.9312L53.6793 20.7933C53.6664 20.6347 53.656 20.476 53.6535 20.3147C53.6463 20.0583 53.5417 19.8144 53.3611 19.633C53.1805 19.4516 52.9376 19.3465 52.6823 19.3393C51.5636 19.2145 50.6572 20.4474 50.0926 21.2329C50.0071 21.3525 49.9269 21.4774 49.8336 21.597C49.6187 20.6971 49.2017 19.8595 48.4041 19.3315C47.1999 18.533 45.6849 18.9388 44.7785 19.9714C44.5032 20.2874 44.2595 20.6298 44.0508 20.9936C44.0016 20.424 43.9239 19.8569 43.8307 19.3003C43.7685 18.918 43.6986 18.5356 43.608 18.1611C43.5498 17.9558 43.4271 17.7749 43.2581 17.6455C43.0891 17.5161 42.883 17.4451 42.6705 17.4432C42.2743 17.4614 41.8029 17.7293 41.733 18.1611C41.5142 19.6488 41.1481 21.1109 40.6402 22.5256L40.5314 22.8143L40.4848 22.9236V22.9366C40.4123 23.0978 40.3372 23.2617 40.2569 23.4204C40.1766 23.579 40.0497 23.7923 39.9358 23.9718C39.8814 24.0576 39.7441 24.2319 40.0238 23.8652C39.9539 23.9588 39.8917 24.0368 39.8296 24.1253C39.7985 24.1721 39.7415 24.2917 39.6846 24.3854C39.7079 24.3489 39.7131 24.3281 39.6535 24.3854C39.5939 24.4426 39.5991 24.453 39.5706 24.4842C39.4852 24.5856 39.3945 24.6845 39.2987 24.7781C39.2029 24.8718 39.1174 24.942 39.0397 25.0382L38.9154 25.1267C38.8009 25.2 38.6825 25.2668 38.5606 25.3269H38.5451C38.4545 25.3529 38.369 25.3842 38.2861 25.405H38.2628C38.2835 25.405 38.1566 25.405 38.1152 25.405H37.9935C38.0142 25.405 37.8769 25.405 37.8381 25.3868C37.7993 25.3686 37.6931 25.3451 37.6232 25.3217C37.5973 25.3035 37.5532 25.2853 37.5299 25.2723H37.517L37.3823 25.1501L37.3512 25.0954L37.2917 25.0044C37.2347 24.9108 37.1855 24.8093 37.1363 24.7105L37.1104 24.6663C37.0871 24.6117 37.0741 24.5466 37.0586 24.4998C36.9046 24.026 36.7928 23.5395 36.7245 23.0458C36.7245 22.9808 36.7064 22.9158 36.696 22.8507C36.6805 22.7207 36.6624 22.5906 36.6494 22.4606C36.6209 22.2005 36.5976 21.9638 36.5717 21.7167C36.5277 21.2641 36.4863 20.8063 36.4008 20.3589C36.372 20.1377 36.2963 19.9253 36.1788 19.7359C36.0613 19.5466 35.9048 19.3847 35.7197 19.2613C35.0076 18.8399 34.1089 19.3784 33.648 19.935C32.6872 21.0924 32.3039 22.6531 31.8041 24.0446C31.6668 24.4192 31.5451 24.7937 31.3897 25.1657C31.3198 25.3477 31.2473 25.5272 31.1748 25.7093L31.1541 25.7587C31.1466 25.7775 31.138 25.7957 31.1282 25.8133C31.0919 25.894 31.0583 25.9772 31.0194 26.0552C30.8845 26.3552 30.7324 26.647 30.5636 26.9292C30.4989 27.0384 30.429 27.1451 30.3564 27.2491L30.2787 27.3583C30.2787 27.3583 30.1648 27.4988 30.1415 27.5248C29.9788 27.7079 29.8058 27.8816 29.6236 28.045C29.5614 28.0892 29.4992 28.1361 29.4371 28.1777C29.2429 28.3103 29.0435 28.4378 28.8389 28.5418C28.7068 28.6146 28.5799 28.6797 28.4297 28.7447L28.1163 28.8591C27.9462 28.9129 27.7733 28.9571 27.5984 28.9918C27.5803 28.9918 27.443 29.0126 27.4275 29.0178H27.2799C27.1359 29.0269 26.9914 29.0269 26.8474 29.0178C26.8189 29.0178 26.6816 28.9814 26.6687 28.9788C26.5686 28.9522 26.47 28.9201 26.3735 28.8826C26.3502 28.867 26.1689 28.7785 26.13 28.7551C26.0912 28.7317 26.0057 28.6719 25.9436 28.6329C26.143 28.7629 25.9436 28.6329 25.9125 28.6016C25.8037 28.5066 25.7016 28.404 25.6069 28.2947C25.5888 28.2739 25.5292 28.1959 25.5189 28.1803L25.4567 28.0918C25.323 27.8867 25.2044 27.672 25.1019 27.4494L25.3402 27.2907C26.9406 26.1931 28.4996 24.9654 29.4837 23.2565C30.2094 22.0451 30.5433 20.6374 30.4393 19.2275C30.3897 18.6221 30.2617 18.0258 30.0586 17.4536C29.867 16.9334 29.5951 16.4782 29.0383 16.2987C28.7773 16.2256 28.5024 16.2184 28.2381 16.2779C27.2307 16.4574 26.3113 17.3391 25.6484 18.057C24.5863 19.1946 23.7574 20.5309 23.2088 21.9898C22.6718 23.4553 22.5324 25.0379 22.8049 26.5754C22.4656 26.7653 22.1212 26.9422 21.769 27.0956C21.7431 27.0956 21.5281 27.1945 21.4789 27.2101C21.3805 27.2465 21.2821 27.2777 21.1837 27.3089C21.0853 27.3401 20.9636 27.3714 20.8522 27.3974L20.7124 27.426C20.9256 27.3165 21.0908 27.1316 21.1763 26.9069C21.2617 26.6822 21.2612 26.4337 21.175 26.2094C21.0887 25.9851 20.9228 25.8007 20.7092 25.6921C20.4956 25.5834 20.2495 25.558 20.0183 25.6209C19.5661 25.7569 19.1537 26.0015 18.8167 26.3335C18.5101 26.6511 18.3365 27.0747 18.3316 27.517C18.3268 27.9594 18.4912 28.3867 18.7908 28.7109C19.4408 29.4756 20.5233 29.4912 21.422 29.2649C22.128 29.0851 22.8085 28.8159 23.4471 28.4638C23.5531 28.6923 23.6733 28.9138 23.8071 29.1271C24.2086 29.7531 24.7715 30.2583 25.436 30.5888C26.2994 30.9804 27.268 31.0719 28.1889 30.8489C29.3378 30.5774 30.3926 29.9996 31.2421 29.1765C32.379 28.0606 32.9461 26.5104 33.4848 25.0434C33.7697 24.2631 34.0286 23.4828 34.3239 22.7025C34.3549 22.6167 34.3886 22.5308 34.4223 22.4424C34.4223 22.4138 34.4637 22.3409 34.4793 22.3071C34.5233 22.2057 34.5699 22.1094 34.6165 22.0106C34.7227 23.09 34.8237 24.2111 35.2147 25.2229C35.4004 25.7866 35.7225 26.2952 36.1522 26.7029C36.7401 27.1926 37.4969 27.4291 38.2576 27.3609C39.5965 27.2309 40.6402 26.3491 41.3886 25.2801C41.4429 25.212 41.4906 25.1388 41.531 25.0616C41.5155 25.0954 41.2539 25.4206 41.4637 25.1475C41.5 25.1032 41.5362 25.0564 41.5699 25.0096C41.6725 24.8621 41.7659 24.7084 41.8496 24.5492C41.7641 25.1969 41.7589 25.8836 42.1085 26.4532C42.2356 26.6662 42.4144 26.8433 42.6282 26.9679C42.8419 27.0926 43.0837 27.1607 43.3309 27.1659C43.7193 27.1503 44.1958 26.8746 44.2658 26.448C44.3641 25.8723 44.4911 25.302 44.6464 24.7391C44.7915 24.1981 44.9572 23.6649 45.1644 23.1395L45.2343 22.9652L45.2783 22.8533L45.3301 22.7337C45.3612 22.6661 45.3897 22.601 45.4208 22.536C45.5397 22.2773 45.6728 22.0255 45.8196 21.7817C45.8869 21.6751 45.9594 21.571 46.0294 21.467L46.1433 21.3317C46.221 21.2459 46.3039 21.1679 46.3867 21.0872C46.3867 21.0872 46.3634 21.0872 46.3608 21.0872L46.4049 21.0586C46.4825 20.9858 46.467 21.0066 46.4333 21.0404C46.4614 21.0178 46.4908 20.997 46.5214 20.978C46.5596 20.9529 46.5994 20.9304 46.6405 20.9104C46.728 20.8946 46.8144 20.8737 46.8995 20.8479C46.94 20.8505 46.9807 20.8505 47.0212 20.8479L47.231 20.9026L47.3579 20.9728L47.3812 20.9884C47.42 21.0274 47.4666 21.0638 47.5003 21.1002L47.5702 21.1757L47.5935 21.2095C47.6583 21.3187 47.7153 21.4306 47.7774 21.5424L47.8421 21.7297C47.8836 21.8571 47.9172 21.9898 47.9483 22.1199C47.9794 22.2499 47.9975 22.38 48.0208 22.4944C48.0205 22.5005 48.0205 22.5065 48.0208 22.5126C48.0208 22.5776 48.0364 22.6401 48.0416 22.7051C48.0843 23.2496 48.0843 23.7966 48.0416 24.3411C48.0416 24.5206 48.0105 24.7027 47.9898 24.8822C47.9898 24.9784 47.9898 24.981 47.9898 24.9524C47.9528 25.1757 47.9948 25.405 48.1085 25.6005C48.2221 25.796 48.4003 25.9454 48.612 26.0229C48.8238 26.1004 49.0559 26.101 49.2681 26.0248C49.4803 25.9485 49.6593 25.8001 49.7741 25.6052C50.1558 24.795 50.5802 24.0058 51.0456 23.2409C51.2217 22.9522 51.403 22.6687 51.5946 22.3904L51.7474 22.1771C51.763 22.1537 51.8122 22.0912 51.8407 22.0548L51.908 21.9742C52.289 23.4656 53.1537 24.7872 54.3656 25.7301C55.1285 26.3409 56.0806 26.6634 57.0559 26.6416C58.0312 26.6197 58.968 26.2548 59.703 25.6104C59.703 26.0578 59.7185 26.5026 59.7237 26.95C59.7237 27.2101 59.7237 27.4702 59.7237 27.7147C59.7237 27.9734 59.826 28.2215 60.0082 28.4044C60.1903 28.5873 60.4373 28.6901 60.6949 28.6901C60.9524 28.6901 61.1994 28.5873 61.3816 28.4044C61.5637 28.2215 61.666 27.9734 61.666 27.7147C61.6453 25.7795 61.6453 23.8313 61.5132 21.8988C61.4692 21.2823 61.4433 20.4994 60.7078 20.3121ZM20.3265 27.4312H20.2566C20.2795 27.4254 20.3035 27.4254 20.3265 27.4312ZM28.7275 18.1715C28.7058 18.1851 28.6822 18.1956 28.6576 18.2027C28.6783 18.2027 28.6783 18.2027 28.6576 18.2027C28.6386 18.2102 28.6184 18.2146 28.598 18.2157L28.6498 18.2027H28.598H28.6576C28.6824 18.196 28.706 18.1855 28.7275 18.1715ZM24.6151 24.4504C24.6151 24.3593 24.6306 24.2683 24.6384 24.1903C24.6394 24.1747 24.6394 24.1591 24.6384 24.1435C24.6384 24.1279 24.6384 24.1123 24.6384 24.0888C24.6669 23.9406 24.6928 23.7923 24.7238 23.6467C24.81 23.2664 24.9225 22.8927 25.0605 22.5282C25.0864 22.458 25.1123 22.3904 25.1408 22.3201V22.2941C25.1392 22.2846 25.1392 22.275 25.1408 22.2655C25.2133 22.1068 25.2858 21.9456 25.3661 21.7869C25.5235 21.4767 25.6964 21.1746 25.884 20.8818C25.9738 20.7413 26.067 20.6008 26.1637 20.4604C26.2103 20.3928 26.2595 20.3251 26.3087 20.2601L26.3916 20.1483C26.5703 19.9194 26.7593 19.6983 26.9562 19.485C27.153 19.2717 27.3187 19.1078 27.5104 18.9336C27.6062 18.8451 27.7072 18.7619 27.8056 18.6735C27.824 18.6562 27.844 18.6405 27.8651 18.6267L27.8004 18.6735L27.9402 18.5694C28.0464 18.494 28.1578 18.4238 28.2691 18.3561C28.2924 18.4316 28.3158 18.5044 28.3365 18.5772C28.3572 18.6501 28.3857 18.7853 28.4064 18.8894C28.4064 18.9518 28.4323 19.0142 28.4426 19.0792C28.4815 19.3081 28.466 19.0792 28.4426 19.0792C28.5048 19.0948 28.4841 19.8075 28.4841 19.883C28.4841 20.0234 28.4841 20.1639 28.4582 20.3017C28.4582 20.3563 28.4167 20.5956 28.4582 20.3277L28.4271 20.5072C28.3715 20.8176 28.291 21.1229 28.1863 21.4202C28.1681 21.467 28.1526 21.5112 28.1345 21.5554C28.1255 21.5828 28.1151 21.6097 28.1034 21.6361C28.0335 21.7869 27.961 21.9378 27.8833 22.086C27.7167 22.392 27.529 22.6858 27.3213 22.9652L27.2099 23.1108C27.1478 23.1889 27.0831 23.2643 27.0157 23.3397C26.8785 23.4984 26.7334 23.6519 26.5858 23.8001C26.2598 24.1282 25.9138 24.4357 25.5499 24.7209C25.234 24.9671 24.9086 25.2064 24.5736 25.4388C24.5627 25.1087 24.5765 24.7783 24.6151 24.4504ZM28.4168 28.7369C28.3779 28.7551 28.2458 28.8019 28.4168 28.7369V28.7369ZM37.3331 25.1371C37.3072 25.1084 37.2865 25.0824 37.2917 25.072L37.3331 25.1371ZM39.6638 24.3932L39.6457 24.414L39.6638 24.3932ZM39.6198 24.4374L39.6405 24.4218C39.6405 24.4218 39.6354 24.4296 39.6276 24.4296L39.6198 24.4374ZM46.871 20.8453H46.8917C46.8322 20.8609 46.7467 20.8401 46.8865 20.8453H46.871ZM47.4278 21.0248H47.4459C47.4459 21.0248 47.4511 21.0326 47.4433 21.0248H47.4278ZM52.6072 21.2849L52.6331 21.2693H52.6616C52.7574 21.2433 52.703 21.3083 52.6176 21.3083L52.6072 21.2849Z" fill="#A9FF1C"/>
<path d="M28.1426 21.6335L28.1737 21.5502C28.1788 21.5372 28.1737 21.5476 28.1426 21.6335Z" fill="#A9FF1C"/>
<path d="M46.4203 21.0612L46.4048 21.0768L46.4514 21.0404L46.4229 21.0586L46.4203 21.0612Z" fill="#A9FF1C"/>
<path d="M65.877 20.3537C65.877 20.3537 65.877 20.3693 65.877 20.3719C65.9857 20.4629 65.9184 20.3927 65.877 20.3537Z" fill="#A9FF1C"/>
<path d="M65.8564 20.1742C65.8588 20.1439 65.8588 20.1135 65.8564 20.0832C65.859 20.117 65.859 20.1456 65.8564 20.1742Z" fill="#A9FF1C"/>
<path d="M75.7333 18.2027C76.1139 17.6825 76.4377 16.9828 76.0829 16.3663C75.7695 15.8227 75.1609 15.7239 74.599 15.8461C73.6252 16.0516 72.6981 16.7435 71.973 17.3937C71.4936 17.829 71.0692 18.3217 70.7092 18.8607C70.4375 19.2424 70.2334 19.6683 70.1058 20.1196C69.8261 20.2809 69.5464 20.4396 69.2616 20.5904C69.1487 20.6537 69.0495 20.7389 68.9699 20.8411C68.8902 20.9434 68.8317 21.0606 68.7977 21.1858C68.7637 21.3111 68.755 21.4419 68.772 21.5706C68.789 21.6993 68.8314 21.8232 68.8967 21.9353C68.962 22.0473 69.049 22.1451 69.1524 22.2229C69.2559 22.3007 69.3737 22.357 69.4991 22.3885C69.6245 22.42 69.7549 22.426 69.8827 22.4063C70.0104 22.3865 70.1329 22.3413 70.2431 22.2733L70.4373 22.1667C70.5511 22.3778 70.6774 22.5819 70.8154 22.7779C71.2293 23.3578 71.6809 23.9095 72.1672 24.4296C71.9782 24.3307 71.7917 24.2267 71.613 24.1122C71.4913 24.0368 71.3722 23.9562 71.2531 23.8729L71.0925 23.7585C71.0485 23.7247 70.8335 23.553 71.0355 23.7169C70.6212 23.3917 70.0644 23.3111 69.6604 23.7169C69.5576 23.8273 69.4814 23.9598 69.4377 24.1044C69.4092 24.0368 69.3807 23.9666 69.3444 23.8937C69.0156 23.2539 68.4381 22.7259 67.9149 22.2499C67.3478 21.7297 66.7496 21.2511 66.2057 20.7127C66.0944 20.6008 65.9908 20.4864 65.8846 20.3693L65.8691 20.3537V20.3381C65.8705 20.3226 65.8705 20.3069 65.8691 20.2913C65.8691 20.2549 65.8691 20.2133 65.8691 20.1743C65.8691 20.2159 65.8561 20.1743 65.8691 20.1118V20.0884C65.8691 20.0884 65.8691 20.0676 65.8691 20.0572V20.0832C65.882 20.0234 65.8924 19.9636 65.9079 19.9038C65.9234 19.8439 65.9571 19.7165 65.9882 19.6228C66.0193 19.5292 66.0607 19.4148 66.0995 19.3107C66.1061 19.2983 66.1113 19.2852 66.1151 19.2717L66.1591 19.1755C66.242 19.0021 66.3283 18.8287 66.4181 18.6553C66.5087 18.4862 66.6045 18.3171 66.7107 18.1533C66.775 18.0426 66.8169 17.9203 66.8342 17.7933C66.8514 17.6664 66.8435 17.5373 66.8111 17.4134C66.7786 17.2895 66.7221 17.1732 66.6449 17.0712C66.5677 16.9692 66.4713 16.8835 66.3611 16.8189C66.2509 16.7544 66.1291 16.7122 66.0028 16.6949C65.8764 16.6777 65.7478 16.6855 65.6244 16.7181C65.5011 16.7507 65.3853 16.8074 65.2838 16.885C65.1822 16.9625 65.0969 17.0594 65.0326 17.1701C64.7981 17.5382 64.5929 17.9244 64.4188 18.3249C64.0822 19.087 63.7585 19.974 63.9812 20.8167C64.1469 21.4514 64.6467 21.9326 65.1129 22.3617C65.6308 22.8455 66.1876 23.2981 66.7081 23.7845C66.9618 24.0168 67.203 24.2625 67.4307 24.5206C67.4482 24.5418 67.4673 24.5618 67.4876 24.5804C67.487 24.5873 67.487 24.5943 67.4876 24.6012L67.5446 24.6845H67.5317C67.4591 24.7313 67.3866 24.7807 67.3141 24.8249C67.1872 24.903 67.0551 24.9706 66.9257 25.0382L66.7159 25.1396L66.633 25.1761C66.3129 25.3032 65.9861 25.4126 65.6541 25.5038C65.4961 25.5454 65.3382 25.5818 65.1802 25.6156L64.9678 25.6547H64.8902C64.7684 25.6547 64.6493 25.6729 64.5276 25.6729C64.5664 25.6026 64.6079 25.5324 64.6519 25.4648L64.7555 25.3191C64.771 25.3009 64.8228 25.2333 64.8591 25.1943C64.9601 25.0746 65.0663 24.9602 65.175 24.8483C65.2838 24.7365 65.4107 24.6116 65.5376 24.5024C65.7183 24.3184 65.8197 24.0703 65.8197 23.8118C65.8197 23.5533 65.7183 23.3052 65.5376 23.1212C65.3529 22.9435 65.1071 22.8443 64.8513 22.8443C64.5956 22.8443 64.3497 22.9435 64.165 23.1212C63.2017 23.9562 61.9819 25.4336 62.7044 26.7627C63.4814 28.2011 65.8121 27.543 66.9852 27.1086C68.0056 26.7211 69.3678 26.0344 69.5439 24.9576C69.5764 25.0024 69.6147 25.0426 69.6578 25.0772C70.873 26.0576 72.3016 26.7358 73.8272 27.0566C74.6041 27.2101 75.64 27.2543 75.9249 26.3101C76.0984 25.7041 75.7125 25.2073 75.3137 24.8067C74.8398 24.3333 74.3452 23.8833 73.8816 23.3969C73.5501 23.051 73.229 22.6921 72.9208 22.3253L72.7214 22.0808L72.6748 22.0262L72.6411 21.9768C72.5427 21.8467 72.4469 21.7167 72.3589 21.5762C72.2708 21.4358 72.2113 21.3473 72.1465 21.2277C72.1336 21.2043 72.1232 21.1835 72.1128 21.1601C72.6152 20.8427 73.1073 20.5098 73.5838 20.1613C74.3927 19.6187 75.1171 18.9586 75.7333 18.2027ZM64.2427 25.6651C64.2246 25.6521 64.2194 25.6468 64.2427 25.6651V25.6651ZM64.2246 25.6651C64.1754 25.6468 64.1728 25.6286 64.2246 25.6651V25.6651ZM67.5524 24.6897C67.5291 24.7079 67.5135 24.7209 67.5083 24.7157L67.5524 24.6897ZM67.643 24.8483C67.643 24.9186 67.643 24.9576 67.643 24.8483V24.8483ZM67.7155 24.5206L67.656 24.5856C67.656 24.5674 67.6767 24.5102 67.757 24.4842C67.7414 24.492 67.7285 24.505 67.7155 24.518V24.5206ZM72.0792 21.1132C72.0721 21.0802 72.0617 21.0479 72.0481 21.017C72.0709 21.0447 72.0829 21.0799 72.0818 21.1158L72.0792 21.1132Z" fill="#A9FF1C"/>
<path d="M78.3594 19.3003C78.3591 19.3223 78.3638 19.3441 78.3733 19.3639C78.3827 19.3837 78.3966 19.4011 78.4138 19.4147C78.3931 19.3779 78.3749 19.3396 78.3594 19.3003Z" fill="#A9FF1C"/>
<path d="M79.0921 17.2273C78.7564 16.9924 78.3596 16.8611 77.9506 16.8495C77.5416 16.838 77.1382 16.9467 76.7898 17.1622C76.5723 17.2972 76.4148 17.511 76.3497 17.7593C76.2847 18.0076 76.3171 18.2716 76.4402 18.4966C76.5723 18.7176 76.7854 18.8779 77.0337 18.943C77.282 19.0082 77.5459 18.973 77.7688 18.8451L77.818 18.8191H77.8439C77.8439 18.8191 77.8439 18.8191 77.8698 18.8061H77.8982C77.9449 18.8243 77.9759 18.8321 77.9707 18.8243C78.02 18.8581 78.0588 18.8815 78.0329 18.8555C78.0972 18.9131 78.1577 18.9748 78.2142 19.0402C78.2142 19.0402 78.3281 19.2223 78.3463 19.2561C78.355 19.2721 78.3627 19.2886 78.3696 19.3055C78.3696 19.2847 78.3696 19.2847 78.3929 19.3341L78.4188 19.4069C78.4188 19.4069 78.4317 19.4277 78.4369 19.4303H78.4239C78.4239 19.4303 78.4239 19.4538 78.4239 19.4668C78.4623 19.5916 78.4942 19.7184 78.5198 19.8465C78.5198 19.8959 78.5379 19.948 78.5457 19.9974C78.5482 20.048 78.5543 20.0984 78.5638 20.1482C78.6645 21.5662 78.6054 22.9911 78.3877 24.3957L78.3644 24.5778V24.5934L78.3178 24.9237L78.2686 25.2099C78.1831 25.7119 78.3981 26.2841 78.9471 26.4089C79.4158 26.5182 80.0503 26.2659 80.1409 25.7301C80.3325 24.5746 80.4596 23.4092 80.5216 22.2395C80.6174 20.528 80.6641 18.3405 79.0921 17.2273ZM77.9293 18.7879C77.9915 18.7671 77.9682 18.7749 77.9319 18.7879H77.9293ZM78.5457 19.9896C78.5471 20.0069 78.5471 20.0243 78.5457 20.0416C78.5845 20.1899 78.5508 20.0442 78.5457 19.9896Z" fill="#A9FF1C"/>
<path d="M86.522 16.9177C85.2376 16.5014 83.8475 16.5586 82.6012 17.079C82.1771 17.2642 81.8114 17.5622 81.5435 17.9408C81.2757 18.3194 81.1158 18.7643 81.0811 19.2275C81.0811 19.5557 81.1946 19.8738 81.4022 20.1274C81.5471 20.3244 81.712 20.5057 81.8942 20.6684C81.7592 21.3848 81.6726 22.1096 81.6352 22.8377C81.5827 23.8512 81.9098 24.8477 82.552 25.6312C83.4921 26.6925 85.0537 26.6716 86.32 26.3387C87.1042 26.1306 87.815 25.7068 88.3722 25.1149C88.9295 24.523 89.3112 23.7866 89.4743 22.9886C89.6249 22.1364 89.6293 21.2646 89.4872 20.4109C89.3554 19.6131 89.0097 18.8664 88.4873 18.251C87.9649 17.6356 87.2855 17.1747 86.522 16.9177ZM87.6123 20.8999C87.6123 20.8583 87.6123 20.8375 87.6123 20.8999V20.8999ZM87.6252 20.9962C87.6252 20.9962 87.6252 20.9624 87.6123 20.9259L87.6252 20.9962ZM87.5139 22.8689C87.4932 22.9392 87.4699 23.0094 87.444 23.077L87.3973 23.1732C87.1764 23.6641 86.7839 24.0565 86.2941 24.2761L86.1957 24.3229L86.1103 24.3567C86.0119 24.3879 85.916 24.4217 85.8176 24.4478C85.7192 24.4738 85.6648 24.4868 85.5897 24.5024L85.4188 24.5388L85.222 24.57C85.1132 24.57 85.0019 24.5882 84.8931 24.5908H84.6807H84.6005C84.5263 24.5792 84.4528 24.5636 84.3803 24.544C84.3337 24.544 84.2871 24.5102 84.2405 24.4972L84.2198 24.4816C84.1809 24.4556 84.1343 24.4269 84.0903 24.4035H84.067C84.0256 24.3593 83.9841 24.3047 83.9608 24.2813H83.9479L83.9246 24.2423C83.8805 24.1616 83.8391 24.0784 83.7899 24.0004C83.7899 23.9718 83.7692 23.9458 83.7614 23.9171C83.7355 23.8469 83.7148 23.7767 83.6941 23.7039C83.663 23.5894 83.6578 23.4125 83.6216 23.2773C83.6216 23.3475 83.6008 23.3605 83.5931 23.2175V23.181C83.5931 23.181 83.5931 23.155 83.5801 23.1446L83.5931 23.1732C83.5931 23.1108 83.5931 23.051 83.5931 22.9912C83.5931 22.8065 83.6086 22.6218 83.6241 22.4398C83.6241 22.3331 83.6449 22.2291 83.6552 22.125C83.6552 22.0704 83.6785 21.9456 83.6837 21.9013C83.7174 21.6776 83.7484 21.4566 83.7873 21.2329C83.7873 21.2121 83.7873 21.1886 83.7873 21.1652C84.0178 21.0812 84.2089 20.914 84.3233 20.6961C84.4377 20.4783 84.4673 20.2255 84.4062 19.987C84.3563 19.7981 84.2485 19.6297 84.0981 19.5058C84.1576 19.2171 84.2198 18.9283 84.2819 18.6396C84.3907 18.6396 84.5021 18.624 84.6108 18.6214C84.8361 18.6214 85.064 18.6214 85.2893 18.6422L85.4421 18.6578H85.525C85.6027 18.6734 85.6804 18.6891 85.7581 18.7099C85.8358 18.7307 85.9886 18.7775 86.0999 18.8165L86.1465 18.8321L86.1854 18.8529C86.2656 18.8919 86.3433 18.9309 86.4184 18.9752C86.6657 19.1235 86.8856 19.3136 87.0685 19.537L87.0918 19.5656L87.1151 19.5994C87.1461 19.6488 87.1824 19.6983 87.2135 19.7503C87.2808 19.8621 87.3404 19.9766 87.3973 20.0936V20.1118V20.1274L87.4517 20.2783C87.4906 20.3979 87.5242 20.5202 87.5527 20.6424L87.6045 20.9025C87.6045 20.9416 87.6045 20.9806 87.6045 21.0196C87.6136 21.1694 87.6136 21.3197 87.6045 21.4696C87.6045 21.6776 87.6045 21.8857 87.6045 22.0938C87.6045 22.177 87.6045 22.2629 87.589 22.3539C87.574 22.413 87.5628 22.4729 87.5553 22.5334C87.5631 22.6556 87.5346 22.7623 87.5139 22.8689Z" fill="#A9FF1C"/>
<path d="M83.5776 23.181C83.5891 23.2054 83.5986 23.2306 83.6061 23.2565C83.6014 23.2273 83.5918 23.1991 83.5776 23.1732V23.181Z" fill="#A9FF1C"/>
<path d="M61.6012 15.4456C61.5349 15.3364 61.4411 15.2467 61.3293 15.1854C61.2643 15.1524 61.1967 15.1245 61.1273 15.1022C61.1352 15.0706 61.1404 15.0384 61.1428 15.006C61.1726 14.8778 61.1673 14.7438 61.1273 14.6184C61.0981 14.4946 61.0385 14.3801 60.9538 14.2855C60.886 14.1766 60.7915 14.087 60.6793 14.0254C60.4571 13.8947 60.1923 13.858 59.9432 13.9234C59.694 13.9887 59.4809 14.1508 59.3507 14.3739C59.2204 14.631 59.1329 14.9077 59.0918 15.1933C59.0379 15.4935 59.0187 15.799 59.0348 16.1036C59.0478 16.2789 59.0746 16.4528 59.1151 16.6238C59.1151 16.6602 59.1384 16.6967 59.1513 16.7331C59.1881 16.8442 59.2359 16.9514 59.2938 17.053C59.3515 17.1468 59.4192 17.234 59.4958 17.3131C59.5642 17.3776 59.6388 17.4351 59.7185 17.4848H59.734C59.8174 17.5265 59.904 17.5613 59.993 17.5888C60.0458 17.6017 60.0994 17.6104 60.1536 17.6148C60.2083 17.6247 60.2637 17.6299 60.3193 17.6304C60.4172 17.6288 60.5145 17.6157 60.6093 17.5914H60.6327C60.7129 17.5602 60.8036 17.5238 60.8916 17.4848L60.9382 17.4562C61.0238 17.3978 61.1051 17.3335 61.1817 17.2637C61.2237 17.2259 61.2618 17.1841 61.2956 17.1388C61.3937 17.0178 61.4845 16.891 61.5675 16.7591C61.6193 16.6758 61.6659 16.5874 61.71 16.499C61.7793 16.3908 61.8186 16.266 61.8239 16.1374C61.8524 16.0082 61.8471 15.8738 61.8084 15.7473C61.7665 15.6304 61.6951 15.5264 61.6012 15.4456Z" fill="#A9FF1C"/>
<path d="M77.5618 13.0162C77.6212 13.1709 77.6913 13.3213 77.7716 13.4662C77.8574 13.6027 77.9526 13.733 78.0564 13.8563C78.0998 13.9063 78.1465 13.9533 78.1963 13.9968C78.2778 14.068 78.3644 14.1332 78.4553 14.1919L78.4863 14.2075C78.5698 14.2503 78.6564 14.2868 78.7453 14.3167C78.8843 14.3574 79.0301 14.3694 79.1739 14.352C79.3176 14.3345 79.4564 14.288 79.5818 14.2153C79.7405 14.1226 79.8732 13.991 79.9676 13.8329C80.0117 13.7494 80.0489 13.6624 80.079 13.5728V13.5338C80.106 13.3922 80.1216 13.2487 80.1256 13.1046C80.1408 13.0233 80.1625 12.9432 80.1904 12.8653C80.2308 12.7739 80.2803 12.6868 80.338 12.6052C80.4681 12.4369 80.54 12.2305 80.5426 12.0174C80.5479 11.8874 80.5193 11.7583 80.4597 11.6428C80.4214 11.5218 80.3517 11.4131 80.2577 11.3281C80.0748 11.1466 79.8286 11.0439 79.5714 11.042C79.3622 11.0496 79.1597 11.1183 78.9887 11.2397C78.9 11.1609 78.7933 11.1055 78.678 11.0784C78.5529 11.0445 78.4224 11.0357 78.2939 11.0527C78.1655 11.0696 78.0416 11.112 77.9295 11.1772L77.7327 11.3281C77.6098 11.4464 77.5205 11.5955 77.4738 11.7599C77.4207 11.9182 77.3944 12.0844 77.3961 12.2515C77.3977 12.4179 77.4177 12.5837 77.4556 12.7457C77.4835 12.8386 77.519 12.9291 77.5618 13.0162Z" fill="#A9FF1C"/>
<path d="M105.145 20.1613C105.217 20.1222 105.277 20.0806 105.145 20.1613V20.1613Z" fill="#A9FF1C"/>
<path d="M125.324 21.1653C124.909 20.1248 124.234 19.1573 123.615 18.2209C123.356 17.8333 123.097 17.4406 122.869 17.0426C123.483 16.8037 124.053 16.4644 124.557 16.0386C125.321 15.3727 125.852 13.989 125.01 13.1541C124.234 12.392 122.954 12.6989 122.12 13.1697C121.664 13.4148 121.28 13.7764 121.008 14.218C120.735 14.6595 120.583 15.1655 120.567 15.6849C120.321 15.7449 120.11 15.8991 119.977 16.1142C119.843 16.3294 119.8 16.5884 119.855 16.8356C119.91 17.0828 120.059 17.2986 120.27 17.4365C120.482 17.5744 120.739 17.6235 120.986 17.5732C121.227 18.0782 121.509 18.5628 121.828 19.022C122.192 19.5734 122.548 20.1309 122.897 20.6945C123.037 20.9208 123.174 21.1497 123.301 21.3837C123.35 21.4748 123.4 21.5684 123.446 21.6621C123.462 21.6985 123.48 21.7375 123.498 21.7739C123.516 21.8103 123.527 21.8649 123.539 21.9118H123.516C123.459 21.9274 123.402 21.9378 123.343 21.9508H123.275H123.141C123.001 21.9508 122.861 21.9664 122.719 21.9716C121.775 21.9911 120.832 21.9415 119.896 21.8233H119.867L119.608 21.7843C119.445 21.7609 119.285 21.7349 119.124 21.7063C118.816 21.6517 118.51 21.5918 118.202 21.5242C117.943 21.4696 117.684 21.4046 117.441 21.3395C117.533 21.089 117.542 20.8153 117.467 20.5592C117.296 19.9428 116.71 19.4642 116.296 18.9986C115.867 18.5614 115.486 18.0782 115.162 17.5576C115.382 17.4713 115.593 17.3651 115.794 17.2403C116.115 17.0611 116.388 16.805 116.588 16.4947C116.787 16.1844 116.908 15.8294 116.938 15.4612C116.956 15.1996 116.899 14.9384 116.774 14.7081C116.65 14.4778 116.462 14.2879 116.234 14.1607C115.808 13.956 115.322 13.9125 114.867 14.0384C114.404 14.132 113.978 14.3547 113.636 14.6809C113.294 15.0071 113.051 15.4237 112.935 15.8825C112.935 15.9424 112.914 16.0022 112.906 16.062C112.688 16.1033 112.49 16.22 112.348 16.392C112.207 16.5639 112.129 16.7803 112.129 17.0036C112.132 17.2614 112.235 17.508 112.417 17.6903C112.598 17.8726 112.844 17.9763 113.1 17.979H113.188C113.417 18.4638 113.702 18.9196 114.038 19.3367C114.349 19.739 114.676 20.1274 115.019 20.502L115.035 20.5176C114.884 20.5254 114.733 20.5254 114.582 20.5176C114.494 20.5154 114.407 20.5023 114.323 20.4786C114.204 20.4552 114.084 20.424 113.968 20.3902C113.851 20.3563 113.75 20.3199 113.644 20.2783C113.598 20.2549 113.548 20.2341 113.502 20.2081C113.323 20.1203 113.15 20.0203 112.984 19.909C112.968 19.909 112.849 19.8049 112.813 19.7815L112.779 19.7555C112.594 19.579 112.348 19.4805 112.093 19.4805C111.838 19.4805 111.592 19.579 111.407 19.7555C111.06 20.104 111.003 20.7959 111.407 21.1367C111.544 21.2511 111.684 21.3577 111.826 21.4618C111.688 21.4704 111.554 21.5142 111.438 21.5892C111.368 21.6361 111.096 21.8285 111.031 21.8025C111.031 21.8025 111.275 21.7115 111.104 21.7713L110.985 21.8155L110.754 21.891C110.658 21.9196 110.557 21.9456 110.459 21.9664C110.404 21.9664 110.2 22.0054 110.2 22.0106C109.981 22.0262 109.761 22.0262 109.542 22.0106H109.433L109.332 21.995C109.164 21.9586 109.001 21.9196 108.838 21.8701L108.522 21.7661C108.481 21.7532 108.441 21.7375 108.403 21.7193C108.322 21.6829 108.245 21.6465 108.17 21.6048C108.094 21.5632 108.004 21.5034 107.911 21.4514H107.892L107.76 21.3317C107.727 21.2979 107.538 21.0716 107.6 21.1601L107.579 21.1288C108.97 20.3797 110.687 19.2587 111.036 17.607C111.257 16.6004 111.065 15.1621 109.938 14.8031C108.939 14.4832 107.921 15.2687 107.245 15.9242C106.209 16.9412 105.396 18.5252 105.362 20.039C105.267 20.075 105.174 20.1184 105.085 20.1691L105.124 20.1457L105.052 20.1821L104.865 20.2679C104.583 20.3797 104.298 20.489 104.011 20.5826C103.834 20.6293 103.675 20.7253 103.551 20.8594C103.427 20.9936 103.344 21.1604 103.311 21.3404C103.277 21.5203 103.296 21.706 103.364 21.8758C103.432 22.0456 103.547 22.1925 103.695 22.2993H103.635L103.581 22.2395C103.472 22.0782 103.363 21.9144 103.262 21.7453C103.065 21.415 102.884 21.0716 102.71 20.7257C102.62 20.5436 102.529 20.3615 102.451 20.1769C102.416 20.0452 102.368 19.9172 102.309 19.7945C102.25 19.615 102.195 19.433 102.143 19.2509C102.027 18.8425 101.923 18.429 101.825 18.0154C101.584 17.001 101.374 15.9762 101.177 14.9514C101.177 14.6575 101.151 14.3635 101.126 14.0696C101.073 13.0019 100.832 11.952 100.413 10.9692C100.295 10.7655 100.106 10.6125 99.8826 10.5392C99.6593 10.4658 99.4169 10.4772 99.2014 10.5712C98.9878 10.6655 98.8142 10.8326 98.7114 11.043C98.6086 11.2534 98.5831 11.4935 98.6395 11.7209C98.8207 12.8471 99.0253 13.9708 99.2377 15.1022C99.2584 15.7499 99.2377 16.4028 99.2196 17.0478C99.1962 17.568 99.1626 18.0882 99.1134 18.6084C99.0901 18.8685 99.0668 19.1 99.0383 19.3445C99.0383 19.4642 99.0098 19.5838 98.9942 19.7035L98.9709 19.9012C98.9709 19.9012 98.9709 19.9298 98.9709 19.9506C98.8603 20.7812 98.7012 21.6045 98.4944 22.4164C98.4556 22.562 98.4142 22.7051 98.3701 22.8481C98.3468 22.9184 98.3209 22.986 98.2976 23.0562C98.2944 23.0679 98.2901 23.0792 98.2847 23.09C98.2303 23.1941 98.1785 23.2955 98.1137 23.3944C98.1008 23.4178 98.0853 23.4386 98.0697 23.462C98.0412 23.3579 97.9946 23.2565 97.9635 23.1525C97.8677 22.8299 97.7952 22.4996 97.7046 22.1771C97.395 20.9987 96.9789 19.8512 96.4615 18.7489C96.0264 17.8723 95.2262 16.7851 94.0997 17.1415C93.4626 17.3417 93.0483 17.9426 92.7712 18.52C92.7064 18.6579 92.6469 18.8009 92.5873 18.9414C92.4354 18.5758 92.2066 18.2474 91.9166 17.979C91.7329 17.7994 91.4866 17.699 91.2303 17.699C90.974 17.699 90.7277 17.7994 90.544 17.979L89.7904 18.7957C89.6129 18.9809 89.5137 19.2279 89.5137 19.485C89.5137 19.7421 89.6129 19.9891 89.7904 20.1743C89.9208 20.299 90.0819 20.3865 90.2572 20.4276C90.4325 20.4688 90.6156 20.4621 90.7875 20.4084C90.8056 20.8844 90.8367 21.3629 90.8652 21.8389C90.9273 22.7805 90.9946 23.7195 91.0697 24.6611C91.0738 24.8959 91.1614 25.1215 91.3167 25.2971C91.4721 25.4727 91.6849 25.5866 91.9166 25.6182C92.1484 25.652 92.3845 25.5995 92.5806 25.4707C92.7766 25.3418 92.919 25.1455 92.9809 24.9186C93.1674 23.8938 93.3953 22.8741 93.6594 21.8675C93.8437 21.1307 94.0711 20.4055 94.3405 19.6957C94.3405 19.6957 94.3638 19.6437 94.3742 19.6176C94.3846 19.5916 94.4131 19.5292 94.4338 19.4876C94.4545 19.446 94.5011 19.3575 94.5374 19.2951C94.6202 19.4304 94.6979 19.5708 94.7678 19.7139C94.8378 19.8569 94.887 19.974 94.9465 20.0962L94.9698 20.1483L95.0553 20.3641C95.4386 21.3497 95.7544 22.3604 96.0005 23.3892C96.2388 24.3619 96.8474 25.7093 98.0542 25.6078C99.261 25.5064 99.9498 24.2579 100.266 23.2123C100.468 22.5292 100.629 21.8343 100.747 21.1314C101.087 21.92 101.508 22.6698 102.006 23.3683C102.524 24.0446 103.43 24.7703 104.28 24.1487C104.497 24.0132 104.654 23.7995 104.719 23.5514C104.784 23.3032 104.752 23.0395 104.629 22.8143C104.564 22.7014 104.475 22.6031 104.37 22.5256C104.429 22.5209 104.488 22.5096 104.544 22.4918C104.987 22.3461 105.424 22.1771 105.854 21.9976C105.986 22.2289 106.143 22.4445 106.323 22.6401C107.157 23.5478 108.563 23.9952 109.762 24.0212C110.704 24.0524 111.634 23.8084 112.44 23.3189C112.643 23.1913 112.793 22.995 112.865 22.7656C112.936 22.5361 112.923 22.2886 112.828 22.0678C112.973 22.1355 113.124 22.1979 113.279 22.2525C113.741 22.4062 114.222 22.4938 114.709 22.5126C114.779 22.5126 114.851 22.5126 114.921 22.5126C115.047 22.6669 115.215 22.78 115.405 22.8377C117.478 23.5016 119.631 23.8796 121.804 23.9614C122.716 23.9848 123.762 24.0316 124.586 23.5894C125.487 23.0978 125.692 22.073 125.324 21.1653ZM123.392 14.4676C123.402 14.4488 123.414 14.4314 123.428 14.4156C123.41 14.4416 123.397 14.4572 123.392 14.4676ZM123.842 14.6497C123.842 14.6497 123.902 14.6497 123.907 14.6497C123.912 14.6497 123.876 14.6549 123.842 14.6497ZM114.965 15.4664C114.97 15.4484 114.979 15.4317 114.991 15.417V15.4378L114.965 15.4664ZM115.006 15.404C115.006 15.404 115.022 15.391 115.014 15.404H115.006ZM94.3897 19.0792C94.3172 19.0064 94.3509 19.035 94.3897 19.0792V19.0792ZM94.786 18.905C94.7915 18.8982 94.7986 18.8928 94.8067 18.8894L94.786 18.905ZM102.402 20.0962C102.335 19.9636 102.418 20.0962 102.439 20.1743V20.1561L102.402 20.0962ZM103.741 22.4372L103.785 22.4788L103.741 22.4372ZM103.63 22.3279L103.588 22.2681C103.603 22.283 103.617 22.2987 103.63 22.3149V22.3279ZM103.796 22.4892L103.829 22.523L103.796 22.4892ZM109.092 17.4068C109.092 17.4302 109.092 17.425 109.092 17.4068V17.4068ZM109.182 16.6473C109.182 16.6759 109.182 16.7045 109.182 16.7331C109.182 16.7617 109.182 16.7097 109.182 16.6343V16.6473ZM109.151 16.5172C109.086 16.4288 109.138 16.4548 109.151 16.5276V16.5172ZM108.26 17.7215C108.312 17.6669 108.284 17.7033 108.26 17.7319V17.7215ZM108.056 18.018C108.118 17.9218 108.185 17.8255 108.252 17.7345C108.32 17.6435 108.356 17.607 108.41 17.5472C108.589 17.3514 108.781 17.1688 108.985 17.001L109.016 16.9724L109.066 16.9412L109.19 16.8605V17.0686C109.169 17.1337 109.159 17.2039 109.136 17.2689C109.137 17.2793 109.137 17.2897 109.136 17.3001C109.11 17.3417 109.06 17.4614 109.05 17.4822L108.946 17.6513L108.882 17.7449C108.807 17.8619 108.869 17.7995 108.9 17.7449C108.818 17.8616 108.72 17.9666 108.61 18.057C108.486 18.1845 108.351 18.3171 108.216 18.4238L108.058 18.5538L107.97 18.6188C107.854 18.7047 107.732 18.7853 107.61 18.8789C107.641 18.8061 107.675 18.7333 107.711 18.6631C107.814 18.4449 107.929 18.233 108.056 18.0284V18.018ZM107.911 21.454C107.802 21.3837 107.874 21.428 107.911 21.454V21.454ZM123.692 21.8441C123.687 21.8506 123.681 21.8559 123.674 21.8597C123.708 21.8285 123.734 21.7869 123.692 21.8441Z" fill="#A9FF1C"/>
</svg>


   <div className="barr">
   
   <div className="counter">
    
   </div>
   </div>
</div>
    <Cursor />
    </>
  )
}




