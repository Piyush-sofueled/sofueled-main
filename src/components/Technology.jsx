import React from "react";
import { Fade } from "react-awesome-reveal";

const technologies = [
  {
    category: "Backend technologies",
    items: [
      {
        name: "Node",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Node.js_logo_2015.svg/2560px-Node.js_logo_2015.svg.png",
      },
      {
        name: "Java",
        icon: "https://logos-world.net/wp-content/uploads/2022/07/Java-Symbol.png",
      },
      // { name: '.NET', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Microsoft_.NET_logo.svg/684px-Microsoft_.NET_logo.svg.png' },
    ],
  },
  {
    category: "Front-end technologies",
    items: [
      {
        name: "React",
        icon: "https://cdn.freelogovectors.net/wp-content/uploads/2023/02/react-logo-freelogovectors.net_.png",
      },
      {
        name: "Angular",
        icon: "https://i0.wp.com/blog.knoldus.com/wp-content/uploads/2018/07/angular-logo-1.png?fit=480%2C240&ssl=1",
      },
      {
        name: "Vue",
        icon: "https://dwglogo.com/wp-content/uploads/2017/09/Vue_js_logo.png",
      },
    ],
  },
  {
    category: "Mobile-app",
    items: [
      {
        name: "Android",
        icon: "https://res.cloudinary.com/practicaldev/image/fetch/s--H40ocFOu--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://res.cloudinary.com/nedy123/image/upload/v1560565889/Screenshot_2019-06-15_at_3.28.03_AM_hij9sw.png",
      },
      {
        name: "Flutter",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2-TVphB148wg1omRxgqXTMk9lDbLyunCmdw&s",
      },
      {
        name: "IOS",
        icon: "https://1000logos.net/wp-content/uploads/2017/02/iOS-Logo-2010.jpg",
      },
      {
        name: "ReactNative",
        icon: "https://cdn.worldvectorlogo.com/logos/react-native-1.svg",
      },
      {
        name: "Ionic",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSqnvcWHY3GsNY9EBtXiBHZBNGkkn_Od6Azg&s",
      },
    ],
  },
  {
    category: "No code/Low code",
    items: [
      {
        name: "Webflow",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfMJFyiwVkl2KMEJ0PnO4gPy1WmTcHYTpXSg&s",
      },
      {
        name: "Bubble",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_yuzSAb9xkVaU3vPEsxap8Y5VDUvVrx81Jg&s",
      },
    ],
  },
  {
    category: "DevOps & Cloud",
    items: [
      {
        name: "AWS",
        icon: "https://img.icons8.com/?size=100&id=33039&format=png&color=000000",
      },
      {
        name: "Google Cloud",
        icon: "https://static-00.iconduck.com/assets.00/google-cloud-icon-2048x1288-h9qynww8.png",
      },
      {
        name: "Azure",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/1024px-Microsoft_Azure_Logo.svg.png",
      },
    ],
  },
  {
    category: "AI/ML",
    items: [
      {
        name: "Python",
        icon: "https://logos-world.net/wp-content/uploads/2021/10/Python-Logo.png",
      },
      {
        name: "OpenAI",
        icon: "https://upload.wikimedia.org/wikipedia/commons/1/13/ChatGPT-Logo.png",
      },
      {
        name: "PyTorch",
        icon: "https://cdn.icon-icons.com/icons2/2699/PNG/512/pytorch_logo_icon_169823.png",
      },
      {
        name: "googleAi",
        icon: "https://logowik.com/content/uploads/images/google-ai8845.jpg",
      },
      {
        name: "Meta",
        icon: "https://1000logos.net/wp-content/uploads/2021/10/logo-Meta.png",
      },
    ],
  },
  {
    category: "QA",
    items: [
      {
        name: "Jenkins",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Jenkins_logo_with_title.svg/1280px-Jenkins_logo_with_title.svg.png",
      },
      {
        name: "Jira Software",
        icon: "https://static-00.iconduck.com/assets.00/jira-icon-2048x2048-nmec2job.png",
      },
      {
        name: "Postman",
        icon: "https://www.svgrepo.com/show/354202/postman-icon.svg",
      },
      // { name: 'Kibana', icon: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/elasticco_kibana_logo_icon_169209.png' },
      {
        name: "Apache JMeter",
        icon: "https://files.codingninjas.in/article_images/how-to-install-apache-jmeter-0-1666470795.webp",
      },
      {
        name: "Database",
        icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ59E94pQlK2qC1SZlvgPdpgVJabXyhJomDAQ&s",
      },
    ],
  },
  {
    category: "UI/UX",
    items: [
      {
        name: "Figma",
        icon: "https://www.pngall.com/wp-content/uploads/13/Figma-Logo-PNG-Photos.png",
      },
      // { name: 'Sketch', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKsR_EXxecLUFytcHfXPCZy3x1LgakvyYNuA&s' },
      {
        name: "Adobe XD",
        icon: "https://www.logo.wine/a/logo/Adobe_XD/Adobe_XD-Logo.wine.svg",
      },
      // { name: 'InVision', icon: 'https://rm-media.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/sites/4/2020/08/InVision-App-logo.png' },
      {
        name: "Miro",
        icon: "https://1000logos.net/wp-content/uploads/2023/10/Miro-Logo.png",
      },
      {
        name: "SurveyMonkey",
        icon: "https://blog.knoldus.com/wp-content/uploads/2020/09/survey-monkey-logo.jpeg",
      },
    ],
  },
];

const Technology = () => {
  return (
    <div className="technology w-layout-blockcontainer  w-container base-container">
      <Fade direction="up" triggerOnce>
        <h2 className="why-choose-heading">Technology</h2>
      </Fade>
      <Fade delay={1000} triggerOnce>
        <table>
          <tbody>
            {technologies.map((techCategory, index) => (
              <tr key={index}>
                <td className="tech-category">
                  <h3>
                    {techCategory.category}
                  </h3>
                </td>
                <td>
                  <div className="tech-items">
                    {techCategory.items.map((item, idx) => (
                      <div key={idx} className="tech-item">
                        <img
                          className={item.name}
                          src={item.icon}
                          alt={item.name}
                        />
                        {/* <span>{item.name}</span> */}
                      </div>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fade>
    </div>
  );
};

export default Technology;
