import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { SCREEN_WIDTH } from "../../../resources/operating_system/dimensions";
import { getTheme } from "../../theme/themes";

export default function PrivacyPolicy() {
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
        <Text style={textStyleTOFTop}>
          {
            "Welcome to the Privacy Policy of Straight Line Mission, Inc. (“Straight Line Mission,” “we,” “us,” or “our”). Straight Line Mission provides a digital platform that helps people explore the outdoors with a collection of detailed, straight line trail maps, straight line trail reviews, and photos crowdsourced from a community of registered straight liners and hikers. This Privacy Policy applies to the following services operated by Straight Line Mission (collectively, the “Service”):"
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            '* www.straightlinemission.io and other websites owned and/or operated by Straight Line Mission that contain a link to this Privacy Policy (collectively, the “Site").'
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* All mobile applications that contain a link to this Privacy Policy (the “Straight Line Mission Apps”) and"
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* all services made available by Straight Line Mission through the Site and the Straight Line Mission Apps."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "This Privacy Policy explains what Personal Data (defined below) we collect, how we use and share that data, and your choices concerning our data practices. This Privacy Policy constitutes an integral part of our Terms of Service, accessible at: https://www.straightlinemission.io/terms. Please read this Privacy Policy before using our Service or submitting any Personal Data to Straight Line Mission and contact us if you have any questions."
          }
        </Text>
        <Text style={textStyleTOFHeader}>{"NFORMATION WE COLLECT"}</Text>
        <Text style={textStyleTOF}>
          {
            "When you contact us or interact with our Service we collect information that alone or in combination with other information could be used to identify you (“Personal Data”) as follows: Personal Data You Provide: We collect Personal Data when you sign up for our Service through the Site or an Straight Line Mission App or contact us. The Personal Data collected during these interactions may vary based on what you choose to share with us, but it will generally include:"
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* Account Data: When you sign up, some information is required to create an account on our Service, such as your name, username, email address, and mailing address. "
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* Payment Data: If you choose to purchase a subscription to our Service via credit card, our third party credit card processor (Stripe, Inc. or “Stripe”) will process certain payment and billing information, such as billing address, payment card details, and authentication features. If you have questions about how Stripe protects such information, please read Stripe’s services agreement and privacy policy."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* Social Media Data: We have pages (“Social Media Pages”) on social media sites like Facebook, Instagram, Pinterest, Twitter, and LinkedIn (each a “Social Media Site”). In addition, the companies that host our Social Media Pages or Social Media Features may provide us with aggregate information and analytics regarding the use of our Social Media Pages and Social Media Features."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* Additional Information: To help improve your experience or enable certain features of the Service, you may choose to provide us with additional information, such as your date of birth/age, height, weight, gender, profile picture, city of residence, community username, statistics on your hiking and biking history and your reviews and photographs of trails."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "Information We Receive From Your Use of Our Service: When you visit, use, interact and register with the Service, we may automatically receive certain information about your visit, use, interactions or registration. For example, we may monitor the number of people that visit our Site or Straight Line Mission Apps, peak hours of visits, which page(s) are visited on our Site or Straight Line Mission Apps, the domains our visitors come from (e.g., google.com, yahoo.com, etc.), and which browsers people use to access and visit our Site (e.g., Firefox, Microsoft Internet Explorer, etc.), broad geographical information, and Site- and Straight Line Mission App-navigation pattern. In particular, the following information is created and automatically logged in our systems:"
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* Log Data: Information that your browser automatically sends whenever you visit the Site or Straight Line Mission Apps. Log data includes your IP address (so we understand which country you are connecting from when you visit the Site or Straight Line Mission Apps), browser type and settings, the date and time of your request, and how you interacted with the Site or Straight Line Mission Apps."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* Cookies Data: We use cookies and similar technologies to operate and administer our Site and Straight Line Mission Apps, make it easier for you to use the Site and Straight Line Mission Apps during future visits, and gather usage data on our Site and Straight Line Mission Apps. For more information about the technologies used and information collected on our Site and Straight Line Mission Apps, please refer to our Cookie Policy, which forms part of this Privacy Policy."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* Device Data: Includes the name of the device, operating system, and browser you are using. Information collected may depend on the type of device you use and its settings. We may also collect data from your device to estimate a variety of metrics like the time, frequency and duration of, and calories burned during, your activities for the purpose of calculating your Usage and Activity Data (described below)."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* Usage and Activity Data: We collect information about how you use our Site and Straight Line Mission Apps, such as the types of content that you view or engage with, the features you use, the actions you take, and the time, frequency and duration of, and calories burned during, your activities."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* Geolocation Data: If you have enabled location services for an Straight Line Mission App on your mobile device or on your computer via the Site, we may collect your precise location information based on city, state, zip code, country, latitude and longitude. Straight Line Mission may also derive your approximate location from the IP address of your computer or mobile device. Geolocation data is used for purposes of directing you to nearby trails and parks and offering other relevant content and services."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "Information We Receive From Third Parties If you elect to authenticate to our Service using your account on another service (such as a Facebook, Google, or Apple account), we may receive from the other service information like your external account name as well as other information you may choose to make available to us based on your external account settings, such as contact lists and profile photos (if any). You can stop sharing the information from the other service with us by removing our access to that other service."
          }
        </Text>
        <Text style={textStyleTOFHeader}>{"HOW WE USE PERSONAL DATA"}</Text>
        <Text style={textStyleTOF}>
          {
            "We use Personal Data to enable your use of our Service, including to create your account, process payments, identify and direct you to nearby parks and trails, and give you customer support. This processing is necessary to perform our contract with you. We also use Personal Data as necessary for the following legitimate business interests:"
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* To communicate with you and respond to your inquiries, comments, feedback or questions"
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* To manage our relationship with you, which includes sending administrative information to you relating to our Service and changes to our terms, conditions, and policies, and asking you to leave a review or take a survey."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* To analyze how you interact with our Service and provide, maintain and improve the content and functionality of the Service and our customer relationships and experiences, develop our business and inform our marketing strategy, through the use of cookies and similar technologies as described in our Cookie Policy"
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* To enable us to enhance and personalize the experience we offer to our users. For example, information like your height, weight, gender, and age allows us to provide more accurate statistics including calories burned and distance traveled, as well as relevant trail recommendations. When you allow us to collect precise location information, we use that information to provide essential features of the Service such as navigation assistance, recording an activity, and recommending trails near you."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* To administer and protect our business, the Site and Straight Line Mission Apps, prevent fraud, criminal activity, or misuses of our Site or Straight Line Mission Apps, and to ensure the security of our IT systems, architecture and networks (including troubleshooting, testing, system maintenance, support and hosting of data); and"
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* To comply with legal obligations and legal process and to protect our rights, privacy, safety or property, and/or that of our affiliates, you or other third parties, and enforce our terms and policies."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* To communicate with your Lifeline Notification Group regarding your whereabouts as described on our Site."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "For information about what we mean by legitimate interests and the rights of individuals in the European Union (“EU”), please see the “EU Users” section below. In some cases, we process your Personal Data based on your consent, for example when your consent is needed under the applicable law before setting cookies on your computer or other device (pursuant to our Cookie Policy), when you grant us access to your location or as otherwise provided in this Privacy Policy. Marketing. We may contact you to provide information we believe will be of interest to you. For instance, if you elect to provide your email address, we may use that information to send you promotional information about our products and services. If we do, where required by law, for example if you are in the EU, we will only send you such emails if you consent to us doing so at the time you provide us with your Personal Data. You may opt out of receiving emails by following the instructions contained in each promotional email we send you or by contacting us. If you unsubscribe from our marketing lists, you will no longer receive marketing communications but we will continue to contact you regarding our Site and Services and to respond to your requests."
          }
        </Text>
        <Text style={textStyleTOFHeader}>
          {"HOW WE SHARE AND DISCLOSE PERSONAL DATA"}
        </Text>
        <Text style={textStyleTOF}>
          {
            "In certain circumstances we may share your Personal Data with third parties without further notice to you, unless required by the law, as set forth below:"
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* Vendors and Service Providers: To assist us in meeting business operations needs and to perform certain services and functions, we may share Personal Data with service providers, including hosting, cloud services and other information technology services providers; email communication software providers and email newsletter providers; data base and sales services; customer relationship management, customer engagement, and customer feedback services; payment processors; security services; and analytics services. Pursuant to our instructions, these parties will access, process or store Personal Data in the course of performing their duties to us."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* Business Transfers: If we are involved in a merger, acquisition, financing due diligence, reorganization, bankruptcy, receivership, sale of all or a portion of our assets, or transition of service to another provider, your Personal Data and other information may be shared in the diligence process with counterparties and others assisting with the transaction and transferred to a successor or affiliate as part of that transaction along with other assets."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* Legal Requirements: If required to do so by law or in the good faith belief that such action is necessary to (i) comply with legal or regulatory obligations, including to respond to lawful requests from public authorities and to meet national security or law enforcement requirements, (ii) protect and defend our rights or property, (iii) prevent fraud, (iv) act in urgent circumstances to protect the personal safety of users of the Site, or the public, or (v) protect against legal liability."
          }
        </Text>
        <Text style={textStyleTOFHeader}>{"DATA RETENTION"}</Text>
        <Text style={textStyleTOF}>
          {
            "We keep Personal Data for as long as reasonably necessary for the purposes described in this Privacy Policy, while we have a legitimate business need to do so, or as required by law (e.g. for tax, legal, accounting or other purposes), whichever is the longer. If you have elected to receive marketing communications from us, we retain information about your marketing preferences until you opt out of receiving these communications and in accordance with our policies. To determine the appropriate retention period for your Personal Data, we will consider the amount, nature, and sensitivity of the Personal Data, the potential risk of harm from unauthorized use or disclosure of your Personal Data, the purposes for which we use your Personal Data and whether we can achieve those purposes through other means, and the applicable legal requirements."
          }
        </Text>
        <Text style={textStyleTOFHeader}>{"UPDATE YOUR INFORMATION"}</Text>
        <Text style={textStyleTOF}>
          {
            "If you need to change or correct your Personal Data, please contact us at straightlinemission.app@gmail.com. We will address your request as required by applicable law."
          }
        </Text>
        <Text style={textStyleTOFHeader}>
          {"CALIFORNIA PRIVACY RIGHTS DISCLOSURES"}
        </Text>
        <Text style={textStyleTOF}>
          {
            "Collection, Disclosure, and Use of Personal Data: The categories of Personal Data we have collected in the preceding twelve months are described above in the “Information We Collect” section. In the preceding twelve months, we have disclosed for business purposes each of the categories identified in that section to the categories of third parties identified in the “How We Share and Disclose Personal Data” section. The business and commercial purposes for collecting Personal Data are described in the “How We Use Personal Data” section. We collect Personal Data directly from you and from external accounts you use to log-in to the Service Privacy Rights: Where provided for by law and subject to any applicable exceptions, California residents may have the following rights under the California Consumer Privacy Act of 2018 (“CCPA”):"
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* To know the categories of Personal Data that Straight Line Mission has collected about you, the business purpose for collecting your Personal Data, and the categories of sources from which the Personal Data was collected."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* To access the specific pieces of Personal Data that Straight Line Mission has collected about you."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* To know whether Straight Line Mission has disclosed your Personal Data for business purposes, the categories of Personal Data so disclosed, and the categories of third parties to whom we have disclosed your Personal Data"
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* To have Straight Line Mission, under certain circumstances, delete your Personal Data; and"
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* To be free from discrimination related to the exercise of these CCPA rights."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "Straight Line Mission does not sell your Personal Data. If you would like to exercise any or all of these rights, you may do so by contacting straigthlinemission.app@gmail.com. Your authorized agent may submit requests in the same manner. Once we receive your request, we will verify your identity by sending an email to the email address you provide to us. If you have questions about your rights or our disclosures under the CCPA, or to request access to an alternative format of this notice, you may reach us at straightlinemission.app@gmail.com. Online Tracking and Do Not Track Signals: We and our third party service providers, including Facebook, may use cookies, pixels, or other tracking technologies to collect information about your browsing activities over time and across different websites following your use of the Site and use that information to send targeted advertisements. Our Site currently does not respond to “Do Not Track” (“DNT”) signals and operates as described in this Privacy Policy whether or not a DNT signal is received. If we do respond to DNT signals in the future, we will describe how we do so in this Privacy Policy."
          }
        </Text>
        <Text style={textStyleTOFHeader}>{"CHILDREN"}</Text>
        <Text style={textStyleTOF}>
          {
            "Our Service is not directed to children who are under the age of 13. Straight Line Mission does not knowingly collect Personal Data from children under the age of 13. If you have reason to believe that a child under the age of 13 has provided Personal Data to Straight Line Mission through the Service please contact us and we will endeavor to delete that information from our databases."
          }
        </Text>
        <Text style={textStyleTOFHeader}>{"EU USERS"}</Text>
        <Text style={textStyleTOF}>
          {
            "these purposes, reference to the EU also includes the European Economic Area countries of Iceland, Liechtenstein and Norway, the United Kingdom, and, to the extent applicable, Switzerland). Data Controller: Straight Line Mission is the data controller for the processing of your Personal Data. You can find our contact information in the “Contact Us” section below. Legal Bases for Processing. This Privacy Policy (the paragraph “How We Use Personal Data”) describes the legal bases we rely on for the processing of your Personal Data. Please contact us if you have any questions about the specific legal basis we are relying on to process your Personal Data. As used in this Privacy Policy, “legitimate interests” means our interests in conducting our business and developing a business relationship with you. This Privacy Policy describes when we process your Personal Data for our legitimate interests, what these interests are and your rights. We will not use your Personal Data for activities where the impact on you overrides our interests, unless we have your consent or those activities are otherwise required or permitted by law. Your Rights. Pursuant to the European Union General Data Protection Regulation (“GDPR”), you have the following rights in relation to your Personal Data, under certain circumstances:"
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* Right of access: If you ask us, we will confirm whether we are processing your Personal Data and, if so, provide you with a copy of that Personal Data along with certain other details. If you require additional copies, we may need to charge a reasonable fee."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* Right to rectification: If your Personal Data is inaccurate or incomplete, you are entitled to ask that we correct or complete it. If we shared your Personal Data with others, we will tell them about the correction where possible. If you ask us, and where possible and lawful to do so, we will also tell you with whom we shared your Personal Data so you can contact them directly."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* Right to erasure: You may ask us to delete or remove your Personal Data, such as where you withdraw your consent. If we shared your data with others, we will tell them about the erasure where possible. If you ask us, and where possible and lawful to do so, we will also tell you with whom we shared your Personal Data with so you can contact them directly."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* Right to restrict processing: You may ask us to restrict or ‘block’ the processing of your Personal Data in certain circumstances, such as where you contest the accuracy of the data or object to us processing it (please read below for information on your right to object). We will tell you before we lift any restriction on processing. If we shared your Personal Data with others, we will tell them about the restriction where possible. If you ask us, and where possible and lawful to do so, we will also tell you with whom we shared your Personal Data so you can contact them directly."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* Right to data portability: You have the right to obtain your Personal Data from us that you consented to give us or that was provided to us as necessary in connection with our contract with you, and that is processed by automated means. We will give you your Personal Data in a structured, commonly used and machine-readable format. You may reuse it elsewhere."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* Right to object: You may ask us at any time to stop processing your Personal Data, and we will do so:"
          }
        </Text>
        <Text style={textStyleTOFSub}>
          {
            "* If we are relying on a legitimate interest to process your Personal Data -- unless we demonstrate compelling legitimate grounds for the processing or we need to process your data in order to establish, exercise, or defend legal claims"
          }
        </Text>
        <Text style={textStyleTOFSub}>
          {
            "* If we are processing your Personal Data for direct marketing. We may keep minimum information about you in a suppression list in order to ensure your choices are respected in the future and to comply with data protection laws (such processing is necessary for our and your legitimate interest in pursuing the purposes described above)"
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* Right to withdraw consent: If we rely on your consent to process your Personal Data, you have the right to withdraw that consent at any time. Withdrawal of consent will not affect any processing of your data before we received notice that you wished to withdraw consent."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "* Right to lodge a complaint with the data protection authority: If you have a concern about our privacy practices, including the way we handled your Personal Data, you can report it to the data protection authority that is authorized to hear those concerns (in the UK, the Information Commissioner’s Office (ICO), who can be contacted at https://ico.org.uk/concerns, and in other EU countries the data protection authority of the country in which you are located)."
          }
        </Text>
        <Text style={textStyleTOF}>
          {
            "Please see the “Contact Us” section below for information on how to exercise your rights."
          }
        </Text>
        <Text style={textStyleTOFHeader}>{"INTERNATIONAL TRANSFERS"}</Text>
        <Text style={textStyleTOF}>
          {
            "Straight Line Mission is based in Australia. If you are accessing our Service from the EU or other regions with laws governing data collection and use, please note that your Personal Data will be transferred to and stored in Australia as necessary for the purposes described in this Privacy Policy, and the data may be transmitted to our service providers supporting our business operations (described above). Australia may have data protection laws less stringent than or otherwise different from the laws in effect in the country in which you are located."
          }
        </Text>
        <Text style={textStyleTOFHeader}>{"HEALTH SERVICES"}</Text>
        <Text style={textStyleTOF}>
          {
            "Our Service may utilize connections to the Apple Health App (“HealthKit”), Google Fit, Garmin Connect, and other third-party fitness, health, and tracking applications and services (together with HealthKit, “Health Services”). For more information on HealthKit, please click here. You can choose to connect and share information with Health Services. If you grant access for us to write data to Health Services, we can add information such as your activity recordings and related information like activity distance, calories burned, active energy, and flights climbed, amongst other data, to HealthKit. Your unique health data you choose to send to Health Services Kit is not accessible by Straight Line Mission. Our Apps cannot write data to Health Services unless you grant access. You can remove access at any time inside the Health Service. Since we do not obtain or read any data from Health Services, such Health Services data cannot be used by us for marketing or advertising purposes, or shared with or sold to advertising platforms, data brokers, or information resellers. Straight Line Mission is in no way responsible for the protection of any of your information that you agree to store with Health Services, which is governed by the privacy policies and other terms of the applicable Health Service. You and the Health Service are solely responsible for the protection of such information. Please review the Health Service’s applicable policies and procedures before granting permission to sync your health data and/or other information with the Health Service."
          }
        </Text>
        <Text style={textStyleTOFHeader}>{"LINKS TO OTHER WEBSITES"}</Text>
        <Text style={textStyleTOF}>
          {
            "The Site and Straight Line Mission Apps may contain advertisements for or links to other websites, products, or services not operated or controlled by Straight Line Mission, including Social Media Sites (“Third Party Sites”). The information that you share with Third Party Sites will be governed by the specific privacy policies and terms of service of the Third Party Sites and not by this Privacy Policy. By providing these links we do not imply that we endorse or have reviewed these sites. Please contact the Third Party Sites directly for information on their privacy practices and policies."
          }
        </Text>
        <Text style={textStyleTOFHeader}>{"SECURITY"}</Text>
        <Text style={textStyleTOF}>
          {
            "You use the Service at your own risk. We comply with industry standards to protect Personal Data both online and offline from loss, misuse, and unauthorized access, disclosure, alteration or destruction. However, no Internet or email transmission is ever fully secure or error free. In particular, email sent to or from us may not be secure. Therefore, you should take special care in deciding what information you send to us via the Service or email. Please keep this in mind when disclosing any Personal Data to Straight Line Mission via the Internet. In addition, we are not responsible for circumvention of any privacy settings or security measures contained on the Service, or third party websites."
          }
        </Text>
        <Text style={textStyleTOFHeader}>{"YOUR CHOICES"}</Text>
        <Text style={textStyleTOF}>
          {
            "Whether or not you provide Personal Data to us is completely up to you, but if you choose not to provide information that is needed to use some features of our Service, you may be unable to use those features. You can also contact us to request access to your data or to ask us to update, correct, or delete your Personal Data."
          }
        </Text>
        <Text style={textStyleTOFHeader}>
          {"CHANGES TO THE PRIVACY POLICY"}
        </Text>
        <Text style={textStyleTOF}>
          {
            "The Service, and our business may change from time to time. As a result we may change this Privacy Policy at any time. When we do we will post an updated version on this page, unless another type of notice is required by the applicable law. By continuing to use our Service or providing us with Personal Data after we have posted an updated Privacy Policy, or notified you if applicable, you consent to the revised Privacy Policy and practices described in it."
          }
        </Text>
        <Text style={textStyleTOFHeader}>{"CONTACT US"}</Text>
        <Text style={textStyleTOF}>
          {
            "If you have any questions about our Privacy Policy or the information practices of the Site, please feel free to contact us at straigthlinemission.app@gmail.com."
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
      fontSize: 13,
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
