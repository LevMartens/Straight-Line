import React from "react";
import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import { SCREEN_WIDTH } from "../../domain/resources/environment/dimensions";
import { getTheme } from "../theme/themes";

export default function TermsOfUse() {
  const {
    container1,
    textStyleTOFHeader,
    textStyleTOF,
    textStyleTOFTop,
    textStyleTOFSub,
  } = styles();

  return (
    <View style={container1}>
      <ScrollView>
        <Text style={textStyleTOFTop}>{"GENERAL INFORMATION"}</Text>
        <Text style={textStyleTOFHeader}>
          {"1.1 STRAIGHT LINE MISSION PRODUCTS"}
        </Text>
        <Text style={textStyleTOF}>
          {
            "These Terms & Conditions (these “Terms”) contain the terms and conditions on which we supply content, products or services listed on Straight Line Mission (the “App”), through our applications (the “Apps”) or via other delivery methods to you (the Website and such content, products, services and the Apps are collectively referred to herein as the “Product” or “Products”, which may be updated from time-to-time at the sole discretion of Straight Line Mission). Please read these terms and conditions, carefully before ordering any Products from the Website or third party App stores (e.g. the Apple App Store, the Android Play Store, Amazon, etc.). The terms “Straight Line Mission,” “us” or “we” refers to Straight Line Mission, LLC The term “Device” refers to the device which is used to access the Products including but not limited to computers, smart phones and tablets. The term “you” refers to the user of the Products. When you order (“Order”) any Products, or otherwise use or access the Products, you agree to be bound by these Terms and all applicable laws, rules and regulations. By using the Products, you indicate that you accept these Terms and that you agree to abide by them. If you do not agree to these Terms, please refrain from using the Products. Straight Line Mission makes no warranties, expressed or implied, concerning the accuracy, completeness or suitability of the information and data provided through the Products, and such information and data should not be construed or used as a legal description. Activities associated with the Products can at times involve risk of injury, death, property damage, and other dangers associated with such activities. You understand that Straight Line Mission cannot and does not assume responsibility for any such personal injury, death, or property damage resulting from your use of the Products. Straight Line Mission is not responsible for the misuse or misrepresentation of the information and/or data provided through the Products, and any reliance you place on such information and/or data is therefore strictly at your own risk. Our contact email address is straightlinemission.app@gmail.com. All correspondence to Straight Line Mission including any queries you may have regarding your use of the Products or these Terms should be sent to this contact email address."
          }
        </Text>
        <Text style={textStyleTOFHeader}>
          {"1.2 ARBITRATION NOTICE AND CLASS ACTION WAIVER"}
        </Text>
        <Text style={textStyleTOF}>
          {
            "PLEASE NOTE THAT THESE TERMS CONTAIN AN ARBITRATION CLAUSE. EXCEPT FOR CERTAIN TYPES OF DISPUTES MENTIONED IN THE ARBITRATION CLAUSE, YOU AND STRAIGHT LINE MISSION AGREE THAT DISPUTES RELATING TO THESE TERMS OR YOUR USE OF THE PRODUCTS WILL BE RESOLVED BY MANDATORY BINDING ARBITRATION, AND YOU AND STRAIGHT LINE MISSION WAIVE ANY RIGHT TO PARTICIPATE IN A CLASS-ACTION LAWSUIT OR CLASS-WIDE ARBITRATION."
          }
        </Text>
        <Text style={textStyleTOFHeader}>{"1.3 BASIS OF LICENSE"}</Text>
        <Text style={textStyleTOF}>
          {
            "* These Terms and the Order set out the whole agreement between you and us for the supply of the Products. In order to participate in certain Products, you may be required to agree to additional terms and conditions; those additional terms are hereby incorporated into these Terms. Where such terms are inconsistent with these Terms, the additional terms shall control."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* Please check that the details in these Terms and on the Order are complete and accurate before you use or commit yourself to purchase the Products. If you think that there is a mistake, please make sure that you ask us to confirm any changes in writing, as we only accept responsibility for statements and representations made in writing by an officer of Straight Line Mission."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* AS PART OF YOUR USE OF THE PRODUCTS, YOU AFFIRMATIVELY CONSENT TO THE PROCESSING AND STORAGE OF YOUR PERSONAL INFORMATION IN AUSTRALIA INCLUDING THE PROCESSING AND STORING OF YOUR PERSONAL INFORMATION IN AUSTRALIA FOR THE PURPOSES OF PROCESSING PAYMENTS AND TRACKING INDIVIDUAL USE OF THE PRODUCTS. BY USING THE PRODUCTS, YOU ACKNOWLEDGE THAT YOU UNDERSTAND AND AGREE THAT AUSTRALIA MAY NOT HAVE THE SAME LEVEL OF PROTECTIONS FOR YOUR PERSONAL INFORMATION THAT EXIST IN YOUR COUNTRY OF RESIDENCE, AND YOU NONETHELESS CONSENT TO THE PROCESSING AND STORAGE OF YOUR PERSONAL INFORMATION IN AUSTRALIA. WE WILL TAKE MEASURES AS REQUIRED TO COMPLY WITH APPLICABLE LAW REGARDING THE TRANSFER, STORAGE AND USE OF CERTAIN PERSONAL INFORMATION."
          }
        </Text>
        <Text style={textStyleTOFHeader}>{"1.4 CHANGES TO TERMS"}</Text>
        <Text style={textStyleTOF}>
          {
            "Straight Line Mission reserves the right, in its sole discretion, to change or update these Terms, or any other of our policies or practices, at any time. If we do this, we will notify users by posting such changed or updated Terms on this page, and indicate the date these Terms were last revised. We may also notify you at our discretion, either through the Products’ user interface, in an email notification or through other reasonable means. Any changes or updates will be effective no earlier than fourteen (14) days after they are posted, except that changes addressing new functions of the Products for changes made for legal reasons will be effective immediately upon posting to Straight Line Mission App. Your continued use of the Products constitutes your agreement to abide by the Terms as changed."
          }
        </Text>
        <Text style={textStyleTOFHeader}>
          {"MEMBERSHIPS AND SUBSCRIPTIONS"}
        </Text>
        <Text style={textStyleTOFHeader}>{"2.1 BECOMING A MEMBER"}</Text>
        <Text style={textStyleTOF}>
          {
            "* You may sign up as a registered user of the Products free of charge (a “Member”). To become a Member you need to go to the relevant section of the Products, then submit your email address to us, and create a password to be used in conjunction with that email address. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your Device."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* In the course of your use of the Products, you may provide certain personalized information to us (such information is referred to hereinafter as “User Information”). You may enable the Products or log in to the App via various online third party service providers, such as Facebook, Google, or Apple (“Third Party Services”). By logging in or directly integrating these Third Party Services into the Products, we make your online experiences richer and more personalized. To take advantage of this feature and capabilities, we may ask you to authenticate, register for or log into Third Party Services on the websites of their respective providers. As part of such integration, the Third Party Services will provide us with access to certain User Information that you have provided to such Third Party Services, and we will use, store and disclose such User Information in accordance with our Privacy Policy. Our information collection and use policies with respect to the privacy of such User Information are set forth in the Straight Line mission Privacy Policy. However, please remember that the manner in which Third Party Services use, store and disclose your information is governed solely by the policies of such third parties, and Straight Line Mission shall have no liability or responsibility for the privacy practices or other actions of any third party site or service that may be enabled within the Products. You acknowledge and agree that you are solely responsible for the accuracy and content of User Information, and you agree to keep it up to date."
          }
        </Text>
        <Text style={textStyleTOF}>
          {"* By placing an Order through the Products, you warrant that:"}
        </Text>
        <Text style={textStyleTOFSub}>
          {"* You are legally capable of entering into binding contracts."}
        </Text>
        <Text style={textStyleTOFSub}>
          {
            "* All registration information you submit is truthful and accurate."
          }
        </Text>
        <Text style={textStyleTOFSub}>
          {"* You will maintain the accuracy of such information."}
        </Text>
        <Text style={textStyleTOFSub}>
          {
            "* Your use of the Products does not violate any applicable law or regulation."
          }
        </Text>
        <Text style={textStyleTOFHeader}>{"2.2 USER INFORMATION"}</Text>
        <Text style={textStyleTOF}>
          {
            "You are responsible for maintaining the confidentiality of your account, password and other User Information and for restricting access to your Device to further help protect such information. You are responsible for updating your User Information. Straight Line Mission will not be liable for any loss or damage arising from your failure to comply with this Section."
          }
        </Text>
        <Text style={textStyleTOFHeader}>
          {"2.3 USE OF Straight Line Mission BY MINORS"}
        </Text>
        <Text style={textStyleTOF}>
          {
            "You must be 18 years of age, or the age of majority in your province, territory or country, to sign up as a registered user of the Products. Individuals under the age of 18, or the applicable age of majority, may utilize the Products only with the involvement and consent of a parent or legal guardian, under such person's account and otherwise subject to these Terms."
          }
        </Text>
        <Text style={textStyleTOFHeader}>{"2.4 MEMBERSHIP"}</Text>
        <Text style={textStyleTOF}>
          {
            "As an Straight Line Mission Member you will receive access to certain features and functions of the Products that are not available to non-members. By agreeing to become a Member you opt-in to receiving occasional special offer, marketing, survey and Product based communication emails. You can easily unsubscribe from Straight Line Mission commercial emails by following the opt-out instruction in these emails. Straight Line Mission memberships and subscriptions are not transferable and therefore cannot be sold or exchanged or transferred in any way whatsoever."
          }
        </Text>
        <Text style={textStyleTOFHeader}>{"2.5 SUBSCRIPTIONS"}</Text>
        <Text style={textStyleTOF}>
          {
            "* Straight Line Mission users may access the Products in three ways:"
          }
        </Text>
        <Text style={textStyleTOFSub}>
          {
            "* Browsing the Website or using the Apps without creating an account: we make some features and information available to users without creating an account."
          }
        </Text>
        <Text style={textStyleTOFSub}>
          {
            "* Free Straight Line Mission Member account: additional information and many Product features are available to holders of free accounts."
          }
        </Text>
        <Text style={textStyleTOFSub}>
          {
            "* Paid Straight Line Mission Pro subscription: a subscription fee-based program, which gives you access to premium Product features. You can become an Straight Line Mission Pro subscriber by purchasing a subscription to the Products from the Website, or within the Apps. If you purchase a subscription through the Website, we offer a 30 day money back guarantee. If you are not satisfied with the Straight Line Mission Pro service within 30 days of your initial purchase, email straightlinemission.app@gmail.com and we will refund your payment. Please note that if you purchase a subscription through the Apple iTunes Store or our iPhone application, the sale is final, and we will not provide a refund. Your purchase will be subject to Apple’s applicable payment policy, which also may not provide for refunds. If you purchase a subscription through the Google Play store, the sale is final and we will not provide a refund. Your purchase will be subject to Google’s applicable payment policy, which also may not provide for refunds. If you obtain the Products through one of these distribution channels, you may be subject to additional terms of the distribution channel. These Terms are between you and Straight Line Mission only, and not with the distribution channel. To the extent that you utilize any other third party products and services in connection with your use of the Products, you agree to comply with all applicable terms of any agreement for such third party products and services."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* Our “Annual” subscriptions are paid for by an upfront one-off payment with automatic annual renewal. You acknowledge and agree that Straight Line Mission is authorized to charge the applicable payment instrument (the “Payment Method”) used for"
          }
        </Text>
        <Text style={textStyleTOFSub}>
          {
            "* the initial annual subscription fee at the rate secured at the time of purchase"
          }
        </Text>
        <Text style={textStyleTOFSub}>
          {
            "* the renewal subscription fee(s) at the effective rate in effect at the time of any such renewal. You must cancel your subscription before it renews in order to avoid billing of the renewal subscription fee to the Payment Method you provided. If your original purchase of an Annual plan was through the Website, and you mistakenly renewed your subscription, email support@Straight Line Mission.com within 30 days of your renewal payment and we will refund your renewal payment. Refunds cannot be claimed for any partial subscription period after the first 30 days from any such renewal. Please note that if your subscription is renewed through the Apple iTunes Store or our iPhone application, the sale is final, and we will not provide a refund. Your purchase will be subject to Apple's applicable payment policy, which also may not provide for refunds. If your subscription is renewed through the Google Play Store, the sale is final and we will not provide a refund. Your purchase will be subject to Google's applicable payment policy, which also may not provide for refunds."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* Our “Multi-Year” subscriptions are paid for by an upfront one-off payment and the subscription term will end after the number of years noted in the plan have elapsed from the date you purchased the Products."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            '* In the past we offered “Lifetime" subscriptions that were paid for by an upfront one-off payment, with the subscription term ending when either 100 years elapsed from the date of purchase of the "Lifetime" subscription or Straight Line Mission ceasing to commercially offer the Products.'
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* You may cancel automatic renewals of your Annual subscription at any time in your account at Straight Line Mission.com, or by emailing straightlinemission.app@gmail.com Please note that if you purchase an Annual subscription through the Apple iTunes Store or our iPhone application, you may cancel automatic renewals by selecting Manage App Subscriptions in your iTunes Account settings and selecting the subscription you want to modify. If you purchase an Annual Subscription through the Google Play store you may cancel automatic renewals in account settings under Subscriptions in the Google Play app, or according to the current process outlined by Google Play."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* You agree to promptly notify Straight Line Mission of any changes to the Payment Method you provided while any subscriptions remain outstanding. You are responsible for all applicable fees and charges incurred, including applicable taxes, and all subscriptions purchased by you."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* In the course of your use of the Products, Straight Line Mission and its third party payment service provider may receive and implement updated credit card information from your credit card issuer in order to prevent your subscription from being interrupted by an outdated or invalid card. This disbursement of the updated credit card information is provided to Straight Line Mission and Straight Line Mission’ third party payment service provider at the sole election of your credit card issuer. Your credit card issuer may give you the right to opt-out of the update service. Should you desire to do so, please contact your credit card issuer."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* Our obligation to provide the Products only comes into being when we take receipt of your Order, and we confirm your purchase to you by email. We shall confirm your Order and send you an email to confirm your access to the subscription purchased. Please quote the Order number in all subsequent correspondence with us. Prices in US Dollars and Euros include local taxes. All prices in Pound Sterling include VAT unless otherwise stated. You agree not to hold us responsible for banking charges incurred due to payments on your account. If payment is not received by us from the Payment Method you provided, you agree to pay all amounts due upon demand by us. You agree that you are not permitted to resell any Products purchased through Straight Line Mission for commercial purposes."
          }
        </Text>
        <Text style={textStyleTOFHeader}>{"2.6 DEVICE REQUIREMENTS"}</Text>
        <Text style={textStyleTOF}>
          {
            "The Products includes certain services that are available via a mobile device, including (i) the ability to browse the Site from a mobile device and (ii) the ability to access certain features through an application downloaded and installed on a Device (collectively, the “Mobile Services”). To the extent you access the Products through a Device, your wireless service carrier’s standard charges, data rates and other fees may apply. In addition, downloading, installing, or using certain Mobile Services may be prohibited or restricted by your carrier, and not all Mobile Services may work with all carriers or devices. By using the Mobile Services, you agree that we may communicate with you regarding Company and other entities by SMS, MMS, text message or other electronic means to your mobile device and that certain information about your usage of the Mobile Services may be communicated to us. In the event you change or deactivate your mobile telephone number, you agree to promptly update your Straight Line Mission account information to ensure that your messages are not sent to the person that acquires your old number."
          }
        </Text>
        <Text style={textStyleTOFHeader}>{"2.7 GIFTING"}</Text>
        <Text style={textStyleTOF}>
          {
            "“Gift Subscriptions” are pre-paid memberships to the Products. A person who purchases the gift is referred to in these terms as the “Giftor”. A person who receives and redeems a Gift Subscription to the Products is referred to in these terms as the “Recipient”. Gift subscriptions are paid for as a one-off upfront payment. Once bought, the Giftor will receive an Order confirmation and receipt. The Straight Line Mission gift subscription will be sent to the Recipient on the Giftor’s specified date. Gifting codes can only be used once in the country for which they were purchased and cannot be redeemed for cash, resold or combined with any other offers. We will automatically bill the Payment Method you provided for any purchased Gift Subscriptions at the time of purchase, not delivery. There are no refunds or other credits for Gift Subscription that are not redeemed. Straight Line Mission will notify the Recipient prior to the end of the Gift Subscription that the gift period is about to expire. Straight Line Mission is not responsible if a Gift Subscription is lost, stolen or used without permission."
          }
        </Text>
        <Text style={textStyleTOFHeader}>
          {"2.8 CHANGING FEES AND CHARGES"}
        </Text>
        <Text style={textStyleTOF}>
          {
            "We may at any time and from time to time, in our sole discretion, change the fees and charges, or add new fees and charges, in relation to any of the Products. We will notify you at least 30 calendar days in advance of any such change. Your continued use of the Products after the price change becomes effective constitutes your agreement to pay the changed amount. If you do not agree to the change, you may cancel your membership or subscription in your account settings or by emailing straightlinemission.app@gmail.com."
          }
        </Text>
        <Text style={textStyleTOFHeader}>{"2.9 LIFELINE FUNCTIONALITY"}</Text>
        <Text style={textStyleTOF}>
          {
            "The Products allow you to create a shared group through which you can make your scheduled activities or current safety status available (the “Lifeline Functionality”) to a select group of individuals (a “Lifeline Notification Group”). The creator of Lifeline Notification Group is the “Originator.” To create a Lifeline Notification Group, the Originator may invite other individuals to join a Lifeline Notification Group, by entering the prospective individual’s phone number. By doing so, an Originator represents that he or she has obtained all necessary rights, consents, and permissions to communicate with the individual they invite via SMS, MMS, text message or other electronic means, sent through the Products."
          }
        </Text>
        <Text style={textStyleTOFHeader}>{"CANCELLATION OF SERVICES"}</Text>
        <Text style={textStyleTOFHeader}>{"3.1 CANCELLATION BY YOU"}</Text>
        <Text style={textStyleTOF}>
          {
            "* You may cancel the auto-renewal of your Straight Line Mission subscription that you purchased on the Website in your account settings or by emailing straightlinemission.app@gmail.com."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* Please note that if you purchase a subscription through the Apple iTunes Store or our iPhone application, you may cancel your subscription by cancelling automatic renewal of paid In App Subscriptions by selecting Manage App Subscriptions in your iTunes Account settings and selecting the subscription you want to modify. If you purchase a subscription through the Google Play store you may cancel automatic renewals in account settings under Subscriptions in the Google Play app, or according to the current process outlined by Google Play."
          }
        </Text>
        <Text style={textStyleTOFHeader}>{"3.2 CANCELLATION BY US"}</Text>
        <Text style={textStyleTOF}>
          {
            "You agree that Straight Line Mission, in its sole discretion, may suspend or terminate your use of the Products, for any reason, including, without limitation, as a result of your fraud or breach of any obligation under these Terms. Such termination or suspension may be immediate and without notice. Straight Line Mission may also in its sole discretion and at any time discontinue providing the Products, or any part thereof, with or without notice. You agree that any termination of your access to the Products under any provision of these Terms may be effected without prior notice, and acknowledge and agree that Straight Line Mission may immediately deactivate or delete your account and all related information and files in your account and/or bar any further access to such files or the Products. Further, you agree that Straight Line Mission will not be liable to you or any third party for any termination of your access to the Products. A breach of these Terms, includes without limitation, the unauthorized copying or download of our trail content from the Products."
          }
        </Text>
        <Text style={textStyleTOFHeader}>{"3.3 PROMOTION CODES"}</Text>
        <Text style={textStyleTOF}>
          {
            "Any promotion code or offer provided by us may not be used in conjunction with any other promotion code or offer, past or present. Introductory offers are only available to new users of the Products, except where expressly stated otherwise. Unless otherwise set forth in the terms of any promotion, all pricing promotions or discounts will apply to the initial period of the subscription, and any renewals will be charged at the rate in effect at the time of renewal for the type of subscription purchased."
          }
        </Text>
        <Text style={textStyleTOFHeader}>
          {"PROHIBITED USE OF THE PRODUCTS"}
        </Text>
        <Text style={textStyleTOF}>
          {
            "4.1 Computer Fraud and Abuse: You agree not to upload, post, email or otherwise send or transmit or introduce any material that contains software viruses or any other computer code, files or programs designed to interrupt, harm, damage, destroy or limit the functionality of any computer software or hardware or equipment linked directly or indirectly with the Products or the Products themselves. You agree not to interfere with the servers or networks underlying or connected to the Products or to violate any of the procedures, policies or regulations of networks connected to the Products. You may not access the Products in an unauthorized manner. 4.2 Trespass: You agree that in conjunction with your use of the Products, you will not trespass, or in any manner attempt to gain or gain access to any property or location where you do not have a right or permission to be (“Private Property”). You acknowledge that Straight Line Mission does not have and affirmatively disclaims any obligation or ability to provide you with complete and accurate information regarding the whereabouts of Private Property you may encounter when using the Products. Regardless of whether Straight Line Mission designates any content with a warning regarding its proximity to Private Property, you are solely responsible for obtaining all required permissions to approach or enter Private Property in connection with your use of the Products. 4.3 Disruptive and Disrespectful Use: You agree to be mindful and respectful of places you visit in connection with your use of the Products. You agree that your use of the Products will be appropriate to the environment around you and that you will not create excessive noise or other disturbances in connection with your use of the Products. You agree to act in a manner that is respectful and appropriate to the areas where you use the Products with regard to interacting with people you encounter, disposing of trash, using restroom facilities, using the Product in large groups, parking your vehicle, and otherwise. 4.4 Other Illegal Use: You agree not to impersonate any other person while using the Products, conduct yourself in an offensive manner while using the Products, or use the Products for any illegal, immoral or harmful purpose. 4.5 Reporting for and Release of Liability for Product Misuse: By breaching the provisions of this section 4, you may commit a criminal offense under applicable laws. We may report any such breach to the relevant law enforcement authorities and we may cooperate with those authorities by disclosing your identity to them. In the event of such a breach, your right to use the Products will cease immediately. If you have a dispute with any third party relating to your misuse of the Products, as described in this section or otherwise, you release Straight Line Mission (and our officers, directors, agents, subsidiaries, joint ventures, and employees) from all claims, demands, and damages (actual and consequential) of every kind and nature, known and unknown, suspected and unsuspected, disclosed and undisclosed, arising out of or in any way connected with such disputes. If you are a California resident, you also waive California Civil Code Section 1542, which says: “A general release does not extend to claims which the creditor does not know or suspect to exist in his favor at the time of executing the release, which if known by him must have materially affected his settlement with the debtor.” If you are a resident of another jurisdiction, you waive any comparable statute or doctrine."
          }
        </Text>
        <Text style={textStyleTOFHeader}>
          {"MATERIALS OFFERED THROUGH THE PRODUCTS"}
        </Text>
        <Text style={textStyleTOFHeader}>{"5.1 COPYRIGHT"}</Text>
        <Text style={textStyleTOF}>
          {
            "* All materials (including software and content whether downloaded or not) contained in the Products are owned by Straight Line Mission (or our affiliates and/or third party licensors, where applicable), unless indicated otherwise. You agree and acknowledge that the materials are valuable property and that other than any specific and limited license for use of such materials, you shall not acquire any ownership rights in or to such materials. The materials may not be used except as provided for in these Terms, and any other relevant terms and conditions provided to you without our prior written permission."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* You acknowledge and agree that certain materials on or in the Products are the property of third party licensors and, without prejudice to any and all other rights and remedies available, each such licensor has the right to directly enforce relevant provisions of section 12 against you."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* The Products are not intended for your commercial use. Commercial advertisements, affiliate links, and other forms of solicitation may be removed by us without notice and may result in termination of privileges. You must not use any part of the materials used in or on the Products for commercial purposes without obtaining a written license to do so from us. Material from the Products may not be copied or distributed, or republished, or transmitted in any way, without our prior written consent. Any unauthorized use or violation of these Terms immediately and automatically terminates your right to use the Products and may subject you to legal liability. You agree not to use the Products for illegal purposes (including, without limitation, unlawful, harassing, libelous, invasion of another’s privacy, abusive, threatening or obscene purposes) and you agree that you will comply with all laws, rules and regulations related to your use of the Products. Appropriate legal action may be taken for any illegal or unauthorized use of the Products."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* A limited amount of content may be marked and authorized for the user to share in their personal social channels (Facebook, Twitter, etc.). With respect to content made available by Straight Line Mission through the Products that is specifically identified as available for distribution by you (“Distribution Content”) as part of your blog or other online commentary, analysis or review (“User Commentary”), Straight Line Mission grants you a limited right to download, reproduce and distribute Distribution Content over the internet as part of your User Commentary. You may also modify such Distribution Content but only as required to technically enable the display and distribution of such content through your computer systems and over the Internet (e.g. a change in video format or file size) provided such modification does not materially alter the substance or quality of such content. Your display and distribution of Distribution Content may also be subject to other terms and conditions that are set forth in the description of such content in the Products, such as display and distribution of Distribution Content only within specified usage dates. You agree not to publish the Distribution Content with other content that is known by you to be false, inaccurate, or misleading or that is, or that encourages activity or conduct that is, unlawful, harmful, threatening, abusive, harassing, tortious, defamatory, vulgar, obscene, pornographic, libelous, invasive of another’s privacy, hateful, or racially, ethnically or otherwise objectionable. Distribution Content may contain trackers that enable us to collect information with respect to the distribution and consumption of such content."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* You may not otherwise download, display, copy, reproduce, distribute, modify, perform, transfer, create derivative works from, sell or otherwise exploit any content, code, data or materials in the Products. If you make other use of the Products, or the content, code, data or materials thereon, except as otherwise provided above, you may violate copyright and other laws of Australia, other countries, as well as applicable state laws and may be subject to liability for such unauthorized use. Straight Line Mission will enforce its intellectual property rights to the fullest extent of the law, including the seeking of criminal prosecution."
          }
        </Text>
        <Text style={textStyleTOFHeader}>{"5.2 TRADEMARKS"}</Text>
        <Text style={textStyleTOF}>
          {
            "Straight Line Mission®, the Straight Line Mission logo and all other Straight Line Mission product or service marks are trademarks of Straight Line Mission. All intellectual property, other trademarks, logos, images, product and company names displayed or referred to on or in the Products are the property of their respective owners. Nothing grants you any license or right to use, alter or remove or copy such material. Your misuse of the trademarks displayed on the Products is strictly prohibited. Straight Line Mission will enforce its trademark rights to the fullest extent of the law, including the seeking of criminal prosecution."
          }
        </Text>
        <Text style={textStyleTOFHeader}>{"5.3 OSM NOTICE"}</Text>
        <Text style={textStyleTOF}>
          {
            "The Products contain information from an OpenStreetMap derivative database."
          }
        </Text>
        <Text style={textStyleTOFHeader}>{"AVAILABILITY OF PRODUCTS"}</Text>
        <Text style={textStyleTOF}>
          {
            "6.1 Although we aim to offer you the best service possible, we make no promise that the Products will meet your requirements and we cannot guarantee that the Products will be fault free. If a fault occurs in the Products, please report it to us at straightlinemission.app@gmail.com and we will review your complaint and, where we determine it is appropriate to do so, correct the fault. If the need arises, we may suspend access to the Products while we address the fault. We will not be liable to you if the Products are unavailable for a commercially reasonable period of time. 6.2 Your access to the Products may be occasionally restricted to allow for repairs, maintenance or the introduction of new facilities or Products. We will restore the Products as soon as we reasonably can. In the event that the Products are unavailable, our usual Order and cancellation deadlines apply; please notify us of changes to your Order by emailing straightlinemission.app@gmail.com."
          }
        </Text>
        <Text style={textStyleTOFHeader}>{"USER MATERIAL"}</Text>
        <Text style={textStyleTOF}>
          {
            "7.1 The Products may let you submit material to us: for example, in various parts of the Products you may be able to upload a photo to your profile, write reviews of trails, upload photos of your outdoor activities, or upload files that record your activities. In these Terms, we use the term “User Material” to refer to any publicly available material of any kind that you submit to us, including text, files, images, photos, and recorded activity information. User Material does not include the account information, Product purchase, or Product use information which you provide in registering for and using Products. 7.2 This section 7 sets out the rights and obligations that each of us have in connection with User Material. If you review or submit User Material, you are agreeing to do so in accordance with these Terms. If you do not want to review or submit User Material in accordance with these Terms, then you should not do so. 7.3 We do not always review User Material submitted by you or other users. We are not responsible for the content of User Material provided by you or any other user. We do not necessarily endorse any opinion contained in such material. We make no warranties or representations, express or implied, about User Material, including as to its legality or accuracy. 7.4 We reserve the right, in our sole discretion, to refuse to post or to remove or edit any of your User Material, or to restrict, suspend, or terminate your access to all or any part of the Products, particularly where User Material breaches this section 7, and we may do this with or without giving you any prior notice. 7.5 We may link User Material or parts of User Material to other material, including material submitted by other users or created by Straight Line Mission or other third parties. We may use User Material for our internal business purposes, for example, to examine trends or categories or to promote, market or advertise Straight Line Mission. You acknowledge that we may commercially benefit from use of your User Material. 7.6 Each time you submit User Material to us, you represent and warrant to us as follows:"
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* You own your User Material or have the right to submit it, and in submitting it you will not be infringing any rights of any third party, including intellectual property rights (such as copyright or trademark), privacy or publicity rights, rights of confidentiality or rights under contract."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* Your User Material is not illegal, obscene, defamatory, threatening, pornographic, harassing, hateful, racially or ethnically offensive, and does not encourage conduct that would be considered a criminal offense, and does not give rise to civil liability, violate any law, or is otherwise deemed inappropriate."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* Your User Material does not advertise any product or service or solicit any business."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* Your User Material does not identify any individual (including by way or name, address or a still picture or video) under the age of 18 and if User Material identifies any individual over the age of 18, you have that person’s consent to being identified in exactly that way in your User Material; and in submitting your User Material you are not impersonating any other person."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* You will not collect usernames and/or email addresses of users for the purpose of sending unsolicited email."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* You will not engage in criminal or tortious activity, including fraud, spamming, spimming, sending of viruses or other harmful files, copyright infringement, patent infringement, or theft of trade secrets or attempt to impersonate another user or person."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* You will not engage in any automated use of the system, such as using scripts to alter our content."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* You will not, without authorization, access, tamper with, or use non-public areas of the Products, Straight Line Mission’ computer systems, or the technical delivery systems of Straight Line Mission’ providers."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* Except as necessary to maintain your own computer security by use of commercial-off-the-shelf anti-virus or anti-malware products, you will not attempt to probe, scan, or test the vulnerability of the Products or any other Straight Line Mission system or network or breach any security or authentication measures."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "7.7 We are entitled to identify you to third parties who claim that their rights have been infringed by User Material you have submitted. 7.8 User Material is not considered to be confidential. You agree not to submit any content as User Material in which you have any expectation of privacy. By submitting User Material you hereby grant Straight Line Mission an irrevocable, perpetual, non-exclusive, royalty free, worldwide license to use, telecast, copy, perform, display, edit, distribute and otherwise exploit the User Material you post on the Products, or any portion thereof, and any ideas, concepts, or know how contained therein, with or without attribution, and without the requirement of any permission from or payment to you or to any other person or entity, in any manner (including, without limitation, for commercial, publicity, trade, promotional, or advertising purposes) and in any and all media now known or hereafter devised, and to prepare derivative works of, or incorporate into other works, such User Material, and to grant and authorize sublicenses of the foregoing without any payment of money or any other form of consideration to you or to any third party. Straight Line Mission may include your User Material in Straight Line Mission’ Distribution Content that is made available to others through the Products. Be aware that Straight Line Mission has no control over User Material once it leaves the Products, and it is possible that others may duplicate material found on the Products, including, but not limited to, on other sites on the Internet. You represent and warrant that you own or otherwise control the rights to your User Material. You agree to indemnify Straight Line Mission and its affiliates for all claims arising from or in connection with any claims to any rights in your User Material or any damages arising from your User Material. 7.9 Any inquiries, feedback, suggestions, ideas, other information which is not part of your use of the Products or User Material that you provide to us (collectively, “Submissions”) will be treated as non-proprietary and non-confidential. By transmitting, uploading, posting, e-mailing, or otherwise submitting Submissions to the Products, you grant, and you represent and warrant that you have the right to grant, to Straight Line Mission an irrevocable, perpetual, non-exclusive, royalty free, worldwide license to use, telecast, copy, perform, display, edit, distribute and otherwise exploit the Submissions, or any portion thereof and any ideas, concepts, or know how contained therein, with or without attribution, and without the requirement of any permission from or payment to you or to any other person or entity, in any manner (including, without limitation, for commercial, publicity, trade, promotional, or advertising purposes) and in any and all media now known or hereafter devised, and to prepare derivative works of, or incorporate into other works, such Submissions, and to grant and authorize sublicenses of the foregoing without any payment of money or any other form of consideration to you or to any third party. You also acknowledge that your Submissions will not be returned to you and that Straight Line Mission has no obligation to acknowledge receipt of or respond to any Submissions. If you make a Submission, you represent and warrant that you own or otherwise control the rights to your Submission. You agree to indemnify Straight Line Mission and its affiliates for all claims arising from or in connection with any claims to any rights in any Submission or any damages arising from any Submission."
          }
        </Text>
        <Text style={textStyleTOFHeader}>{"LINKS TO WEBSITES/HOME PAGE"}</Text>
        <Text style={textStyleTOF}>
          {
            "8.1 We may provide links to other websites or services for you to access. You acknowledge that any access is at your sole discretion and for your information only. We do not review or endorse any of those websites or services. We are not responsible in any way for:"
          }
        </Text>
        <Text style={textStyleTOF}>{"* the availability of"}</Text>
        <Text style={textStyleTOF}>{"* the privacy practices of"}</Text>
        <Text style={textStyleTOF}>
          {
            "* the content, advertising, products, goods or other materials or resources on or available from"
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* the use to which others make ofthese other websites or services. We are also not responsible for any damage, loss or offense caused or alleged to be caused by, or in connection with, the use of or reliance on such websites or services."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "8.2 You may link to our home page, provided you do so in a way that is fair and legal and does not damage our reputation or take advantage of it, but you must not establish a link in such a way as to suggest any form of association, approval or endorsement on our part where none exists. You must not establish a link from any website that is not owned by you. The Products must not be framed on any other website, nor may you create a link to any part of the Products unless you have written permission to do so from Straight Line Mission. We reserve the right to withdraw linking permission with written notice. The website from which you are linking must comply in all respects with the content standards set out in our acceptable use policy. If you wish to make any use of material on or in the Products other than that set out above, please address your request to straightlinemission.app@gmail.com."
          }
        </Text>
        <Text style={textStyleTOFHeader}>{"PRODUCTS DISCLAIMER"}</Text>
        <Text style={textStyleTOF}>
          {
            "The information contained in the Products is for general information purposes only. While we endeavor to keep the information up-to-date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, accessibility (including rights of entry and/or use), security or availability with respect to the Products or the information contained on the Products for any purpose. In some cases, the Products are designed to reduce, but not eliminate, certain risks, but you hereby acknowledge and agree that the Products are not sufficient to warrant or guarantee that either no loss, no damage, or no physical harm will occur. You understand that Straight Line Mission cannot and does not assume responsibility for any such personal injury, death, or property damage resulting from your use of the Products. Straight Line Mission is not responsible for the misuse or misrepresentation of the information and/or data provided through the Products. Any reliance you place on such information is therefore strictly at your own risk."
          }
        </Text>
        <Text style={textStyleTOFHeader}>{"PRINTING LIMITATIONS"}</Text>
        <Text style={textStyleTOF}>
          {
            "The Straight Line Mission Pro subscription grants you the right to create and reproduce an unlimited number of hard copy reproductions for your personal, in-house business, or intra-institutional use, subject to the property rights notice and credit requirements set forth below. We ask that any included Straight Line Mission or 3rd party copyright notices appear in legible form on or adjacent to the reproduction. You may distribute hard copy reproductions on paper, as long as the reproductions are distributed freely, without charge, in a non-commercial manner. We ask that you obtain a supplemental license in writing from Straight Line Mission before you reproduce any reproductions in a publication that is for sale, resale or that contains paid advertisements."
          }
        </Text>
        <Text style={textStyleTOFHeader}>{"END USER LICENSE"}</Text>
        <Text style={textStyleTOF}>
          {
            "11.1 Subject to the terms of this license agreement (“License Agreement”), as set out in this section 11, and these other Terms, and your payment of applicable subscription fees, Straight Line Mission grants you a limited, non-exclusive, revocable license to stream, download and make personal non-commercial use of the Products. 11.2 The Products contain or embody copyrighted material, proprietary material or other intellectual property of Straight Line Mission or its licensors. All right, title and ownership in the Products remain with Straight Line Mission or its licensors, as applicable. The rights to download and use the Products are licensed to you and are not being sold to you, and you have no rights in them other than to use them in accordance with this License Agreement and our other Terms. 11.3 You agree that you will not and you will not assist or permit any third party to:"
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* Copy, store, reproduce, transmit, modify, alter, reverse-engineer, emulate, de-compile, or disassemble the Products in any way, or create derivative works of the Products;"
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* Use the Products or any part of them to create any tool or software product that can be used to create software applications of any nature whatsoever;"
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* Rent, lease, loan, make available to the public, sell or distribute the Products in whole or in part;"
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* Tamper with the Products or circumvent any technology used by Straight Line Mission or its licensors to protect any content accessible through the Products;"
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* Circumvent any territorial restrictions applied to the Products; or"
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* Use the Products in a way that violates this License Agreement or the other Terms."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* Use the Products for any commercial purpose without the express written consent of Straight Line Mission."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "11.4 You may not make the Products available to the public. The Products made available (in whole or in part) are owned by Straight Line Mission or its licensors and your use of them must be in accordance with these Terms."
          }
        </Text>
        <Text style={textStyleTOFHeader}>
          {"DIGITAL MILLENIUM COPYRIGHT ACT (“DMCA”) NOTICE"}
        </Text>
        <Text style={textStyleTOF}>
          {
            "12.1 We are committed to complying with copyright and related laws, and we require all users of the Products to comply with these laws. Accordingly, you may not store any material or content on, or disseminate any material or content over, the Products in any manner that constitutes an infringement of third party intellectual property rights, including rights granted by copyright law. Owners of copyrighted works in Australia who believe that their rights under copyright law have been infringed may take advantage of certain provisions of the US Digital Millennium Copyright Act of 1998 (the “DMCA”) to report alleged infringements. You may not post, modify, distribute, or reproduce in any way any copyrighted material, trademarks, or other proprietary information belonging to others without obtaining the prior written consent of the owner of such proprietary rights. It is our policy to terminate privileges of any user who repeatedly infringes the copyright rights of others upon receipt of proper notification to us by the copyright owner or the copyright owner’s legal agent. 12.2 If you feel that a posted message is objectionable or infringing, we encourage you to contact us immediately. Upon our receipt of a proper notice of claimed infringement under the DMCA, we will respond expeditiously to remove, or disable access to, the material claimed to be infringing and will follow the procedures specified in the DMCA to resolve the claim between the notifying party and the alleged infringer who provided the content in issue. Our designated agent (i.e., the proper party) to whom you should address such notice is listed below. 12.3 If you believe that your work has been copied and posted on the Products in a way that constitutes copyright infringement, please provide our designated agent with the following information:"
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* An electronic or physical signature of the person authorized to act on behalf of the owner of the copyright or other intellectual property interest;"
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* A description of the copyrighted work or other intellectual property that you claim has been infringed;"
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* A description of where the material that you claim is infringing is located on the Products;"
          }
        </Text>
        <Text style={textStyleTOF}>
          {"* Your address, telephone number, and email address;"}
        </Text>
        <Text style={textStyleTOF}>
          {
            "* A statement by you that you have a good faith belief that the disputed use is not authorized by the copyright or intellectual property owner, its agent, or the law; and"
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* A statement by you, made under penalty of perjury, that the information contained in your report is accurate and that you are the copyright or intellectual property owner or authorized to act on the copyright or intellectual property owner’s behalf."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* Our designated agent for notice of claims of copyright infringement can be reached as follows: By Mail: Straight Line Mission, LLC Attn: Copyright Agent 148 Canning Street, 3053 By E-Mail: straightlinemission.app@gmail.com Subject line: DMCA"
          }
        </Text>
        <Text style={textStyleTOFHeader}>{"GENERAL TERMS AND CONDITIONS"}</Text>
        <Text style={textStyleTOFHeader}>{"13.1 ASSIGNMENT BY US"}</Text>
        <Text style={textStyleTOF}>
          {
            "Straight Line Mission may assign or transfer its rights and obligations under these Terms to any company, firm or person at any time and without restriction. You may not assign or transfer your rights or obligations under these Terms to anyone else without the prior written consent of Straight Line Mission. These Terms are personal to you and no third party is entitled to benefit under these Terms except as set out here."
          }
        </Text>
        <Text style={textStyleTOFHeader}>{"13.2 INDEMNITY BY YOU"}</Text>
        <Text style={textStyleTOF}>
          {
            "You agree to defend, indemnify and hold Straight Line Mission and its directors, officers, members, investors, managers, employees and agents harmless from any and all claims, liabilities, costs and expenses, including reasonable attorneys’ fees, arising in any way from your use of the Products, your placement or transmission of any message, content, information, software, or other submissions through the Products, or your breach or violation of the law or of these Terms. Straight Line Mission reserves the right, at its own expense, to assume the exclusive defense and control of any matter otherwise subject to indemnification by you, and in such case, you agree to cooperate with Straight Line Mission defense of such claim. If you are a California resident, you waive California Civil Code Section 1542, which says: “A general release does not extend to claims which the creditor does not know or suspect to exist in his favor at the time of executing the release, which if known by him must have materially affected his settlement with the debtor.” If you are a resident of another jurisdiction, you waive any comparable statute or doctrine."
          }
        </Text>
        <Text style={textStyleTOFHeader}>
          {"13.3 WARRANTIES AND LIMITATIONS"}
        </Text>
        <Text style={textStyleTOF}>
          {
            "* We warrant to you that any Product purchased from us will, on delivery, conform in all material respects with its description and be of reasonably satisfactory quality."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* Nothing in this sections 13.3 or otherwise in these Terms shall exclude or in any way limit Straight Line Mission’ liability that may not be excluded or limited as a matter of law."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* The Products and their content are otherwise provided on an “as is” basis and we make no representations or warranties of any kind with respect to them, including as to the accuracy, completeness or currency of the Products or their content. We assume no liability or responsibility for any errors or omissions in the content of the Products, or any failures, delays, or interruptions in the provision of the Products. We disclaim and exclude any express or implied warranties or representations, including any warranties as to merchantability or fitness for a particular purpose of the Products to the broadest extent permitted by law. We make no warranties or representations, express or implied, as to the timeliness, accuracy, quality, completeness or existence of the content and information posted on the Products. We make no warranties or representations, express or implied, for technical accessibility, fitness or flawlessness of the Products. We make no warranties or representations that your use of content and information posted on the Products will not infringe rights of third parties."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* All conditions, warranties and other terms which might otherwise be implied by statute, common law or the law of equity are, to the extent permitted by law, excluded."
          }
        </Text>
        <Text style={textStyleTOFHeader}>{"13.4 NO WAIVER"}</Text>
        <Text style={textStyleTOF}>
          {
            "If we delay exercising or fail to exercise or enforce any right available to us under these Terms, such delay or failure does not constitute a waiver of that right or any other rights under these Terms."
          }
        </Text>
        <Text style={textStyleTOFHeader}>{"13.5 FORCE MAJEURE"}</Text>
        <Text style={textStyleTOF}>
          {
            "We will not be liable to you for any lack of performance, or the unavailability or failure, of the Products, or for any failure or delay by us to comply with these Terms, where such lack, unavailability or failure arises from any cause beyond our reasonable control."
          }
        </Text>
        <Text style={textStyleTOFHeader}>{"13.6 INTERPRETATION"}</Text>
        <Text style={textStyleTOF}>
          {
            "In these Terms, unless the context requires otherwise: i) any phrase introduced by the words “including”, “include”, “in particular”, “for example” or any similar expression shall be construed as illustrative only and shall not be construed as limiting the generality of any preceding words; and ii) references to the singular include the plural and to the masculine include the feminine, and in each case vice versa."
          }
        </Text>
        <Text style={textStyleTOFHeader}>
          {"13.7 ELECTRONIC COMMUNICATIONS"}
        </Text>
        <Text style={textStyleTOF}>
          {
            "* Applicable laws require that some of the information or communications we send to you should be in writing. When using the Products, you agree to transact with us electronically, and that communication with us will be mainly electronic. We will contact you by e-mail or provide you with information by posting notices on the Products. You agree to this electronic means of communication and you acknowledge that all contracts, notices, information and other communications that we provide to you electronically comply with any legal requirement that such communications be in writing."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* In order to retain a copy, please select “Print,” and select the appropriate printer. If you do not have a printer, you can copy the text and the underlying agreement(s) and paste them into a new document in a word processor or a text editor on your computer and save the text."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* You have the right to receive a paper copy of the communications. To receive a paper copy, please request it by emailing us at straightlinemission.app@gmail.com."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* We may charge you a reasonable service charge to mail you a paper copy of any communication. We will either include such service charge on our fee schedule or we will first inform you of the charge and provide you with the choice as to whether you still want us to send you a paper copy. Please be sure to state that you are requesting a copy of the particular communication."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* To receive and view an electronic copy of the communications you must have the following equipment and software:"
          }
        </Text>
        <Text style={textStyleTOFSub}>
          {
            "* A personal computer or other device which is capable of accessing the Internet. Your access to this page verifies that your system/device meets these requirements."
          }
        </Text>
        <Text style={textStyleTOFSub}>
          {
            "* an Internet web browser which is capable of supporting 128-bit SSL encrypted communications, JavaScript, and cookies. Your system or device must have 128-bit SSL encryption software. Your access to this page verifies that your browser and encryption software/device meet these requirements."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* To retain a copy, you must either have a printer connected to your personal computer or other device or, alternatively, the ability to save a copy through use of printing service or software such as Adobe Acrobat®. If you have a word processor or text editor program on your computer, then you can also copy the text and paste the text into a new document in the word processor or text editor and save the text."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* You can also contact us via email at straightlinemission.app@gmail.com to withdraw your consent to receive any future communications electronically, including if the system requirements described above change and you no longer possess the required system. If you withdraw your consent, we may terminate your use of the Products."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* We reserve the right, in our sole discretion, to discontinue the provision of your electronic communications, or to terminate or change the terms and conditions on which we provide electronic communications. We will provide you with notice of any such termination or change as required by law."
          }
        </Text>
        <Text style={textStyleTOFHeader}>{"13.8 NOTICES"}</Text>
        <Text style={textStyleTOF}>
          {
            "Unless otherwise specifically indicated, all notices given by you to us must be given to Straight Line Mission at straightlinemission.app@gmail.com. We may give notice to you at the e-mail address you provide to us when you register, or in any of the ways specified in section 13.7 above. Notice will be deemed received and properly served immediately when posted on the Products or when an e-mail or other electronic communication is sent. In proving the service of any notice via email, it will be sufficient to prove that such e-mail was sent to the specified e-mail address of the addressee."
          }
        </Text>
        <Text style={textStyleTOFHeader}>{"13.9 ENTIRE AGREEMENT"}</Text>
        <Text style={textStyleTOF}>
          {
            "These Terms and any document expressly referred to in them constitute the whole agreement between us and supersede all previous discussions, correspondence, negotiations, previous arrangement, understanding or agreement between us relating to their subject matter. We each acknowledge that neither of us relies on, or will have any remedies in respect of, any representation or warranty (whether made innocently or negligently) that is not set out in these Terms or the documents referred to in them. Each of us agrees that our only liability in respect of those representations and warranties that are set out in this agreement (whether made innocently or negligently) will be for breach of contract. Nothing in this section limits or excludes any liability for fraud."
          }
        </Text>
        <Text style={textStyleTOFHeader}>{"13.10 THIRD PARTY RIGHTS"}</Text>
        <Text style={textStyleTOF}>
          {
            "A person who is not party to these Terms will not, subject to section 12 (DMCA), have any rights under or in connection with these Terms."
          }
        </Text>
        <Text style={textStyleTOFHeader}>{"13.11 OUR LIABILITY"}</Text>
        <Text style={textStyleTOF}>
          {
            "* We will use reasonable endeavors to remedy faults in the Products. If we fail to comply with these Terms, we will be liable to you only for the purchase price of the Products in question. In addition, we will not be liable for:"
          }
        </Text>
        <Text style={textStyleTOFSub}>
          {
            "* Faulty operation of computers during the registration process or during completion of a subscription or during the transmission of any data and/or for incorrect or overly slow transmission of data by the internet provider and/or any damage that occurs due to information submitted by you not being received by us or not being received promptly or not being considered, as a consequence of technical faults with our software or hardware (whether or not they are within or outside of our control)."
          }
        </Text>
        <Text style={textStyleTOFSub}>
          {
            "* Any loss or damage due to viruses or other malicious software that may infect your Device, computer equipment, software, data or other property caused by you accessing, using or downloading from the Products, or from transmissions via emails or attachments received from us."
          }
        </Text>
        <Text style={textStyleTOFSub}>
          {
            "* Any use of websites linked to the Products but operated by third parties."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* YOU EXPRESSLY UNDERSTAND AND AGREE THAT Straight Line Mission WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY DAMAGES, OR DAMAGES FOR LOSS OF PROFITS INCLUDING BUT NOT LIMITED TO, DAMAGES FOR LOSS OF GOODWILL, USE, DATA OR OTHER INTANGIBLE LOSSES (EVEN IF Straight Line Mission HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES), WHETHER BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY OR OTHERWISE, RESULTING FROM: (I) THE USE OR THE INABILITY TO USE THE SERVICE OR PRODUCTS; (II) THE COST OF PROCUREMENT OF SUBSTITUTE GOODS AND SERVICES RESULTING FROM ANY GOODS, DATA, INFORMATION OR SERVICES PURCHASED OR OBTAINED OR MESSAGES RECEIVED OR TRANSACTIONS ENTERED INTO THROUGH OR FROM THE SERVICE OR PRODUCTS; (III) UNAUTHORIZED ACCESS TO OR ALTERATION OF YOUR TRANSMISSIONS OR DATA; (IV) STATEMENTS OR CONDUCT OF ANY THIRD PARTY ON THE SERVICE OR PRODUCTS; OR (V) ANY OTHER MATTER RELATING TO THE SERVICE or PRODUCTS. IN NO EVENT WILL COMPANY’S TOTAL LIABILITY TO YOU FOR ALL DAMAGES, LOSSES OR CAUSES OF ACTION EXCEED THE AMOUNT YOU HAVE PAID Straight Line Mission IN THE LAST SIX (6) MONTHS, OR, IF GREATER, ONE HUNDRED DOLLARS ($100). SOME JURISDICTIONS DO NOT ALLOW THE DISCLAIMER OR EXCLUSION OF CERTAIN WARRANTIES OR THE LIMITATION OR EXCLUSION OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES. ACCORDINGLY, SOME OF THE ABOVE LIMITATIONS SET FORTH ABOVE MAY NOT APPLY TO YOU OR BE ENFORCEABLE WITH RESPECT TO YOU. IF YOU ARE DISSATISFIED WITH ANY PORTION OF THE SERVICE OR PRODUCTS OR WITH THESE TERMS OF SERVICE, YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE USE OF THE SERVICE AND/OR PRODUCTS. IF YOU ARE A USER FROM NEW JERSEY, THE FOREGOING SECTIONS TITLED “DISCLAIMER OF WARRANTIES” AND “LIMITATION OF LIABILITY” ARE INTENDED TO BE ONLY AS BROAD AS IS PERMITTED UNDER THE LAWS OF THE STATE OF NEW JERSEY. IF ANY PORTION OF THESE SECTIONS IS HELD TO BE INVALID UNDER THE LAWS OF THE STATE OF NEW JERSEY, THE INVALIDITY OF SUCH PORTION SHALL NOT AFFECT THE VALIDITY OF THE REMAINING PORTIONS OF THE APPLICABLE SECTIONS."
          }
        </Text>
        <Text style={textStyleTOFHeader}>{"13.12 ARBITRATION"}</Text>
        <Text style={textStyleTOF}>
          {
            "PLEASE READ THE FOLLOWING PARAGRAPHS CAREFULLY, AS THEY REQUIRE YOU TO ARBITRATE DISPUTES WITH Straight Line Mission, AND LIMIT THE MANNER IN WHICH YOU CAN SEEK RELIEF FROM Straight Line Mission."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* Applicability of Arbitration Agreement. All disputes arising out of, relating to, or in connection with these Terms or your use of the Products that cannot be resolved informally or in small claims court will be resolved through binding arbitration on an individual basis, except that you and Straight Line Mission are not required to arbitrate any dispute in which either party seeks equitable relief for the alleged unlawful use of copyrights, trademarks, trade names, logos, trade secrets, or patents."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* Arbitration Rules. The Federal Arbitration Act governs the interpretation and enforcement of this dispute-resolution provision. Arbitration will be initiated through The Australian Centre for International Commercial Arbitration (ACICA). If the AAA is not available to arbitrate, the parties will select an alternative arbitral forum. The rules of the arbitral forum will govern all aspects of this arbitration, except to the extent those rules conflict with these Terms. The AAA Consumer Arbitration Rules (“AAA Rules”) governing the arbitration are available online at www.adr.org or by calling the AAA at 1-800-778-7879. The arbitration will be conducted by a single neutral arbitrator. If the claim is for $10,000 or less, the party initiating the arbitration may choose whether the arbitration will be conducted (1) solely on the basis of documents submitted to the arbitrator; (2) through a non-appearance based telephonic hearing; or (3) by an in-person hearing as established by the AAA Rules in the county of your billing address. In the case of an in-person hearing, the proceedings will be conducted at a location which is reasonably convenient for both parties with due consideration of the ability to travel and other pertinent circumstances. If the parties are unable to agree on a location, the determination will be made by the arbitration institution. Your arbitration fees and your share of arbitrator compensation will be limited to those fees set forth in the AAA Rules with the remainder paid by Straight Line Mission. If the arbitrator finds that either the substance of your claim or the relief sought in the arbitration is frivolous or brought for an improper purpose (as measured by the standards set forth in Federal Rule of Civil Procedure 11(b)), then the payment of all fees will be governed by the AAA Rules. In such case, you agree to reimburse Straight Line Mission for all monies previously disbursed by it that are otherwise your obligation to pay under the AAA Rules. Regardless of the manner in which the arbitration is conducted, the arbitrator shall issue a reasoned written decision sufficient to explain the essential findings and conclusions on which the decision and award, if any, are based. The arbitrator may make rulings and resolve disputes as to the payment and reimbursement of fees or expenses at any time during the proceeding and upon request from either party made within 14 days of the arbitrator’s ruling on the merits."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* Authority of Arbitrator. The arbitrator will decide the jurisdiction of the arbitrator and the rights and liabilities, if any, of you and Straight Line Mission. The dispute will not be consolidated with any other matters or joined with any other cases or parties. The arbitrator will have the authority to grant motions dispositive of all or part of any claim or dispute. The arbitrator will have the authority to award all remedies available under applicable law, the arbitral forum's rules, and the Terms. The arbitrator has the same authority to award relief on an individual basis that a judge in a court of law would have. The award of the arbitrator is final and binding upon you and Straight Line Mission."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* Jury Trial Waiver. You and Straight Line Mission waive any constitutional and statutory rights to go to court and have a trial in front of a judge or a jury. Rather, you and Straight Line Mission elect to have claims and disputes resolved by arbitration. In any litigation between you and Straight Line Mission over whether to vacate or enforce an arbitration award, you and Straight Line Mission waive all rights to a jury trial, and elect instead to have the dispute be resolved by a judge."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* Class Action Waiver. WHERE PERMITTED UNDER THE APPLICABLE LAW, YOU AND Straight Line Mission AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR OUR INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR CONSOLIDATED ACTION. If, however, this waiver of class or consolidated actions is deemed invalid or unenforceable, neither you nor Straight Line Mission are entitled to arbitration; instead all claims and disputes will be resolved in a court as set forth in section 13.13 below."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* Opt-out. YOU MAY OPT-OUT OF THIS ARBITRATION AGREEMENT. If you do so, neither you nor Straight Line Mission can force the other to arbitrate. To opt-out, you must notify Straight Line Mission in writing no later than 30 days after first becoming subject to this arbitration agreement. Your notice must include your name and address, and the email address you used to set up your Straight Line Mission account (if you have one), and an unequivocal statement that you want to opt-out of this arbitration agreement. You must send your opt-out notice to one of the following physical or email addresses: Straight Line Mission, LLC, ATTN: Arbitration Opt-out, 148 Canning Street, Melbourne; straightlinemission.app@gmail.com."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* Small Claims Court. Notwithstanding the foregoing, either you or Straight Line Mission may bring an individual action in small claims court."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* Arbitration Agreement Survival. This arbitration agreement will survive the termination of your relationship with Straight Line Mission."
          }
        </Text>
        <Text style={textStyleTOFHeader}>{"13.13 EXCLUSIVE VENUE"}</Text>
        <Text style={textStyleTOF}>
          {
            "To the extent the parties are permitted under these Terms to initiate litigation in a court, both you and Straight Line Mission agree that all claims and disputes arising out of or relating to the Terms or the use of the Products will be litigated exclusively in Australia District Court for the District of Victoria. If, however, that court would lack original jurisdiction over the litigation, then all claims and disputes arising out of or relating to the Terms or the use of the Products will be litigated exclusively in the Superior Court of Victoria, County of Melbourne. You and Straight Line Mission consent to the personal jurisdiction of both courts."
          }
        </Text>
        <Text style={textStyleTOFHeader}>{"13.14 CHOICE OF LAW"}</Text>
        <Text style={textStyleTOF}>
          {
            "Except to the extent they are preempted by Australia federal law, the laws of Victoria, other than its conflict-of-laws principles, govern these Terms and any disputes arising out of or relating to these Terms or their subject matter, including tort claims."
          }
        </Text>
        <Text style={textStyleTOFHeader}>{"13.15 SEVERABILITY"}</Text>
        <Text style={textStyleTOF}>
          {
            "If any provision of these Terms is found unenforceable, then that provision will be severed from these Terms and not affect the validity and enforceability of any remaining provisions. Straight Line Mission, LLC is located at 148 Canning Street,Melbourne."
          }
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = () => {
  const theme = getTheme();
  return StyleSheet.create({
    container1: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: theme.containerBackgroundColor,
      flex: 1,
      flexDirection: "column",
      height: "100%",
    },
    textStyleTOFHeader: {
      marginLeft: 30,
      fontSize: 20,
      color: theme.textColor,
      textAlign: "left",
      fontFamily: theme.fontFamily,
    },
    textStyleTOFTop: {
      marginTop: 100,
      marginLeft: 30,
      fontSize: 20,
      color: theme.textColor,
      textAlign: "left",
      fontFamily: theme.fontFamily,
    },
    textStyleTOFSub: {
      marginBottom: 10,
      width: SCREEN_WIDTH - 80,
      marginLeft: 50,
      fontSize: 13,
      color: theme.textColor,
      textAlign: "left",
      fontFamily: theme.fontFamily,
    },
    textStyleTOF: {
      marginBottom: 30,
      width: SCREEN_WIDTH - 50,
      marginLeft: 30,
      fontSize: 13,
      color: theme.textColor,
      textAlign: "left",
      fontFamily: theme.fontFamily,
    },
  });
};
