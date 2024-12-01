import HeroNewsletter from "@/src/components/Newsletter/HeroNewsletter";
import NewsPage from "@/src/components/Newsletter/MainContainer";
import NewsletterSlider from "@/src/components/Newsletter/NewsletterSlider";
import NewsletterSub from "@/src/components/Newsletter/NewsletterSub";
import React from "react"


const NewsletterPage = () => {
    return (
        <div>
            <HeroNewsletter/>
            <NewsPage/>
            <NewsletterSlider/>
            <NewsletterSub/>
        </div>
    )
}

export default NewsletterPage; 