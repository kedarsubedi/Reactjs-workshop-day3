import Navbar from "../components/Navbar";

const About = () => {
    return (
        <>
            <Navbar />
            <main class="main">
                <h1 class="main__heading">About Twitter</h1>
                <p class="main__text">Twitter is a social networking and microblogging service that enables its users to send and read short messages called tweets. Twitter was created in 2006 by Jack Dorsey, Biz Stone, and Evan Williams, and launched in July of that year. The service rapidly gained worldwide popularity, with millions of users signing up in its first few years.</p>
                <p class="main__text">Today, Twitter is one of the most widely used social media platforms, with over 330 million monthly active users who send more than 500 million tweets per day.</p>
                <h2 class="main__subheading">Our Mission</h2>
                <p class="main__text">Twitter's mission is to give everyone the power to create and share ideas and information instantly, without barriers.</p>
                <h2 class="main__subheading">Our Team</h2>
                <p class="main__text">Twitter's team is made up of talented and passionate individuals from around the world. Our team is committed to building a platform that fosters open communication, freedom of expression, and the free exchange of ideas.</p>
                <h2 class="main__subheading">Contact Us</h2>
                <p class="main__text">If you have any questions, comments, or feedback about Twitter, please don't hesitate to contact us.</p>
                <ul class="main__list">
                    <li class="main__list-item">Email: <a href="mailto:support@twitter.com" class="main__link">support@twitter.com</a></li>
                    <li class="main__list-item">Phone: <a href="tel:+14152229670" class="main__link">+1-415-222-9670</a></li>
                    <li class="main__list-item">Twitter: <a href="https://twitter.com/TwitterSupport" class="main__link">@TwitterSupport</a></li>
                </ul>
            </main>
        </>
    );
}
export default About;