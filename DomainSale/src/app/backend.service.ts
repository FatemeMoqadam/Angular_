import { News, Config } from './Interface';
import { Injectable, Type } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of ,tap} from 'rxjs';
const NEWS = [];

@Injectable({ providedIn: 'root' })
export class BackendService {
  constructor(private http: HttpClient) {}
  status: any = '222';

  NEWS: News[] = [];
  temp :any[] = [];

  getNews(): Observable<News[]> {
    this.http.get<any>("https://saurav.tech/NewsAPI/top-headlines/category/health/in.json").subscribe(response => 
        { if(response.status == 'ok') 
            for(let a of response.articles)
            {
                this.NEWS.push(a as News);
            }    
    });
    // this.NEWS =  [
    //     {
    //         source: {
    //             id: null,
    //             name: "Livemint"
    //         },
    //         author: "Livemint",
    //         title: "Long Covid More Severe In Women Than Men, Suggests Study - Mint",
    //         description: "The study found that 91% of patients, who were followed up for five months on average, continued to experience Covid-19 symptoms. Breathlessness was the most common symptom of long Covid-19, followed by fatigue",
    //         url: "https://www.livemint.com/news/india/long-covid-more-severe-in-women-than-men-suggests-study-11650538683775.html",
    //         urlToImage: "https://images.livemint.com/img/2022/04/21/600x338/long_covid_symptoms_1650540839356_1650540839488.jpg",
    //         publishedAt: "2022-04-21T11:37:19Z",
    //         content: "Post-coronavirus complications, also called long Covid syndrome, induce more symptoms in women than men, a new study has found. \r\nThe new research, published in the Journal of Women's Health, reveale… [+2402 chars]"
    //     },
    //     {
    //         source: {
    //             id: null,
    //             name: "The European Scientist"
    //         },
    //         author: "Alex Reis",
    //         title: "Air pollution increases risk of getting COVID-19 in young adults - The European Scientist",
    //         description: "Exposure to air pollutants increases the risk of a COVID infection in young adults, according to a study published in the scientific journal JAMA Network Open.",
    //         url: "https://www.europeanscientist.com/en/environment/air-pollution-increases-risk-of-getting-covid-19-in-young-adults/",
    //         urlToImage: "https://www.europeanscientist.com/wp-content/uploads/2022/04/46385A43-4ABE-46E7-8556-37B944126F7F.jpeg",
    //         publishedAt: "2022-04-21T11:22:43Z",
    //         content: "Exposure to air pollutants increases the risk of a COVID infection in young adults, according to a study published in the scientific journal JAMA Network Open.\r\nAs pollutants can increase the risk of… [+2206 chars]"
    //     },
    //     {
    //         source: {
    //             id: null,
    //             name: "Thewire.in"
    //         },
    //         author: "Prakash Nagarkatti and Mitzi Nagarkatti",
    //         title: "Why We Can't 'Boost' Our Way Out of the COVID-19 Pandemic in the Long Term – The Wire Science - The Wire Science",
    //         description: "While current vaccines are effective at preventing severe disease, the next phase of vaccine development will need to focus on triggering long-lived antibody response.",
    //         url: "https://science.thewire.in/health/we-cannot-boost-our-way-out-of-covid-19-pandemic-in-long-term/",
    //         urlToImage: "https://cdn.thewire.in/wp-content/uploads/2022/04/21164421/2022-04-13T080134Z_1_LYNXNPEI3C09C_RTROPTP_4_HEALTH-CORONAVIRUS-TAIWAN-scaled.jpg",
    //         publishedAt: "2022-04-21T11:20:35Z",
    //         content: "A woman receives a booster shot of a COVID-19 vaccine at Taipei main station, Taiwan, January 24, 2022. Photo: Reuters/Ann Wang/File Photo\r\n<ul><li>mRNA vaccines have failed to provide long-term prot… [+7979 chars]"
    //     },
    //     {
    //         source: {
    //             id: null,
    //             name: "Keralakaumudi.com"
    //         },
    //         author: "Kerala Kaumudi",
    //         title: "Let's manage pain, learn about 'Pain Medicine' - LIFESTYLE - GENERAL - Kerala Kaumudi ",
    //         description: "Pain Medicine is a relatively new medical specialty that deals with the comprehensive management of chronic pain. Chronic pain refers to any pain condition that lasts more than 3 months.",
    //         url: "https://keralakaumudi.com/en/news/news.php?id=797844&u",
    //         urlToImage: "https://keralakaumudi.com/web-news/en/2022/04/NMAN0327506/image/pain.1650539584.jpg",
    //         publishedAt: "2022-04-21T11:14:14Z",
    //         content: "What is Pain Medicine?\r\nPain Medicine is a relatively new medical specialty that deals with the comprehensive management of chronic pain. Chronic pain refers to any pain condition that lasts more tha… [+6986 chars]"
    //     },
    //     {
    //         source: {
    //             id: "usa-today",
    //             name: "USA Today"
    //         },
    //         author: "Dr. Michael Daignault, USA TODAY",
    //         title: "We've long been told salt is bad for you. Is it really? - USA TODAY",
    //         description: "We've long debated how bad salt really is in our diet. Table salt, however, is not actually the problem. Sodium and processed foods are the danger.",
    //         url: "https://www.usatoday.com/story/life/health-wellness/2022/04/21/salt-sodium-how-much-too-much-your-food/7383952001/",
    //         urlToImage: "https://www.gannett-cdn.com/-mm-/27594c94e294278da7a9705c8a139c700fad0370/c=0-188-1998-1312/local/-/media/2021/07/27/USATODAY/usatsports/french-fries-and-salt.jpg?auto=webp&format=pjpg&width=1200",
    //         publishedAt: "2022-04-21T11:01:15Z",
    //         content: "For years now, we’ve continued to debate whether salt is actually “bad” for our health. And in discussing healthy diet and lifestyle choices with both my ER patients and friends alike, the common thr… [+3565 chars]"
    //     },
    //     {
    //         source: {
    //             id: null,
    //             name: "THE WEEK"
    //         },
    //         author: "PTI",
    //         title: "Good HDL cholesterol may keep Alzheimer's away: study - The Week",
    //         description: "Having good cholesterol or high-density lipoprotein (HDL) in the body is essential to health as it may protect the brain and keep Alzheimer's disease at bay, according to a recent study. Researchers from University of Southern California's (USC) Keck School o…",
    //         url: "https://www.theweek.in/news/health/2022/04/21/good-hdl-cholesterol-may-keep-alzheimer-s-away--study-.html",
    //         urlToImage: "https://www.theweek.in/content/dam/week/news/2020/images/2022/2/10/HDL-Good-HDL-cholesterol-high-density-lipoprotein-LDL.jpg",
    //         publishedAt: "2022-04-21T10:46:17Z",
    //         content: "Having good cholesterol or high-density lipoprotein (HDL) in the body is essential to health as it may protect the brain and keep Alzheimer's disease at bay, according to a recent study.\r\nResearchers… [+2926 chars]"
    //     },
    //     {
    //         source: {
    //             id: "the-times-of-india",
    //             name: "The Times of India"
    //         },
    //         author: "TIMESOFINDIA.COM",
    //         title: "CDC confirms 4 Americans got Coronavirus from Mink; here is all you need to know about the first animal-to-human transmission of COVID virus - Times of India",
    //         description: "The US health agency recently revealed that a variant of COVID witnessed majorly in mink in 2020 had infected at least four Americans.",
    //         url: "https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/cdc-confirms-4-americans-got-coronavirus-from-mink-here-is-all-you-need-to-know-about-the-first-animal-to-human-transmission-of-covid-virus/photostory/90979229.cms",
    //         urlToImage: "https://static.toiimg.com/photo/90979239.cms",
    //         publishedAt: "2022-04-21T10:45:00Z",
    //         content: "COVID-19 causing coronavirus belongs to a large family of viruses called coronavirus. As per the information available on the website of the CDC, some coronaviruses cause cold-like illnesses in peopl… [+728 chars]"
    //     },
    //     {
    //         source: {
    //             id: null,
    //             name: "ANI News"
    //         },
    //         author: null,
    //         title: "Genetic differences can affect ability to utilize energy of various nutrients: Report - ANI News",
    //         description: "Helsinki [Finland], April 21 (ANI): According to a new study by the University of Helsinki, minor genetic differences can affect the ability to utilize the energy of various nutrients.",
    //         url: "https://www.aninews.in/news/health/genetic-differences-can-affect-ability-to-utilize-energy-of-various-nutrients-report20220421155949",
    //         urlToImage: "https://aniportalimages.s3.amazonaws.com/media/details/__sized__/GENEEEEEEEE2022042109041120220421102941-thumbnail-154x87-70.jpg",
    //         publishedAt: "2022-04-21T10:29:00Z",
    //         content: "ANI | Updated: Apr 21, 2022 15:59 IST\r\nHelsinki [Finland], April 21 (ANI): According to a new study by the University of Helsinki, minor genetic differences can affect the ability to utilize the ener… [+3713 chars]"
    //     }]
    return of(this.NEWS);
  }
}
