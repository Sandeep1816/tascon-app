interface BlogPost {
    id: string
    title: string
    excerpt: string
    content: string
    date: string
    author: string
    image: string
  }
  
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of AI in Event Management',
      excerpt: 'Explore how artificial intelligence is revolutionizing the event industry, from personalized attendee experiences to predictive analytics.',
      content: `<p>Artificial Intelligence (AI) is rapidly transforming various industries, and event management is no exception. As we look to the future, it's clear that AI will play an increasingly significant role in how we plan, execute, and analyze events.</p>
  
      <h2>Personalized Attendee Experiences</h2>
      <p>One of the most exciting applications of AI in event management is the ability to create highly personalized experiences for attendees. AI-powered recommendation systems can suggest sessions, networking opportunities, and exhibitors based on an attendee's interests, past behavior, and professional background. This level of personalization not only enhances the attendee experience but also increases engagement and the overall value of the event.</p>
  
      <h2>Predictive Analytics for Event Planning</h2>
      <p>AI's predictive capabilities are proving invaluable in event planning. By analyzing data from past events, AI can help predict attendance numbers, popular sessions, and even potential logistical issues. This foresight allows event planners to make data-driven decisions, optimizing everything from venue selection to session scheduling.</p>
  
      <h2>Chatbots and Virtual Assistants</h2>
      <p>AI-powered chatbots and virtual assistants are becoming increasingly sophisticated, capable of handling a wide range of attendee queries and tasks. From providing event information and scheduling assistance to offering real-time translation services, these AI tools are enhancing attendee support while freeing up human staff to focus on more complex tasks.</p>
  
      <h2>Conclusion</h2>
      <p>As AI continues to evolve, its impact on event management will only grow. By embracing these technologies, event professionals can create more engaging, efficient, and successful events. The future of event management is here, and it's powered by AI.</p>`,
      date: '2023-05-15',
      author: 'Dr. Emily Chen',
      image: '/placeholder.svg?height=600&width=1200'
    },
    {
      id: '2',
      title: 'Sustainable Practices in Corporate Events',
      excerpt: 'Discover innovative ways to make your corporate events more environmentally friendly without compromising on quality or experience.',
      content: `<p>As the world becomes increasingly aware of the urgent need for environmental conservation, the event industry is stepping up to play its part. Sustainable practices in corporate events are no longer just a trend; they're becoming a necessity. This article explores innovative ways to make your corporate events more environmentally friendly without compromising on quality or experience.</p>
  
      <h2>Eco-Friendly Venue Selection</h2>
      <p>The first step in creating a sustainable event is choosing the right venue. Look for venues that have green certifications, use renewable energy sources, and have robust recycling programs. Consider outdoor venues or those with natural lighting to reduce energy consumption.</p>
  
      <h2>Sustainable Catering Options</h2>
      <p>Food is a significant aspect of any corporate event. Opt for locally sourced, organic ingredients to reduce the carbon footprint associated with transportation. Consider offering more plant-based options, which are generally more sustainable than meat-heavy menus. Use reusable or compostable dinnerware instead of single-use plastics.</p>
  
      <h2>Digital Over Print</h2>
      <p>Embrace digital technology to reduce paper waste. Use event apps for schedules, maps, and information instead of printed materials. When printing is necessary, use recycled paper and eco-friendly inks.</p>
  
      <h2>Waste Management</h2>
      <p>Implement a comprehensive waste management plan. Set up clearly marked recycling and composting stations throughout the event. Partner with local organizations to donate leftover food and materials.</p>
  
      <h2>Sustainable Transportation</h2>
      <p>Encourage attendees to use public transportation or carpooling. For larger events, consider providing shuttle services from central locations. If possible, choose a venue that's easily accessible by public transport.</p>
  
      <h2>Conclusion</h2>
      <p>Implementing sustainable practices in corporate events is not just good for the environment; it can also enhance your brand image and appeal to environmentally conscious attendees and clients. By taking these steps, we can ensure that our events leave a positive impact, not just on attendees, but on the planet as well.</p>`,
      date: '2023-06-02',
      author: 'Sarah Johnson',
      image: '/placeholder.svg?height=600&width=1200'
    },
    {
      id: '3',
      title: 'Leveraging Virtual Reality in B2B Events',
      excerpt: 'Learn how virtual reality is creating immersive experiences in B2B events, from product demonstrations to virtual trade shows.',
      content: `<p>Virtual Reality (VR) is no longer just a buzzword in the tech industry; it's becoming a game-changer in the world of B2B events. As businesses seek more engaging and innovative ways to connect with clients and partners, VR is stepping up to offer immersive experiences that were previously unimaginable. This article explores how VR is being leveraged in B2B events, from product demonstrations to virtual trade shows.</p>
  
      <h2>Immersive Product Demonstrations</h2>
      <p>One of the most powerful applications of VR in B2B events is in product demonstrations. VR allows companies to showcase their products in a fully immersive environment, giving potential clients a chance to 'experience' the product firsthand. For example, an architectural firm could use VR to walk clients through a building before it's constructed, or a manufacturing company could demonstrate how their machinery works in a virtual factory setting.</p>
  
      <h2>Virtual Trade Shows</h2>
      <p>VR is revolutionizing the concept of trade shows. Virtual trade shows allow attendees to explore booths, interact with exhibitors, and attend presentations from anywhere in the world. This not only reduces travel costs and carbon footprint but also allows for a much wider audience reach. Attendees can customize their avatars, network with other participants, and even exchange virtual business cards.</p>
  
      <h2>Training and Education Sessions</h2>
      <p>VR provides an unparalleled platform for training and education in B2B events. Complex concepts can be explained through interactive 3D models, and participants can practice skills in a safe, virtual environment. For instance, a medical device company could use VR to train doctors on using new equipment, or a software company could provide immersive tutorials on their latest applications.</p>
  
      <h2>Virtual Site Visits</h2>
      <p>For industries where site visits are crucial, such as real estate or manufacturing, VR offers a convenient alternative. Companies can create virtual tours of their facilities, allowing potential clients or partners to 'visit' from anywhere in the world. This is particularly useful for international business relationships where physical visits may be challenging or costly.</p>
  
      <h2>Enhancing Presentations and Pitches</h2>
      <p>VR can transform standard presentations into engaging experiences. Instead of slides, presenters can use virtual environments to illustrate their points. For example, a data analytics company could immerse their audience in a 3D visualization of data trends, making complex information more understandable and memorable.</p>
  
      <h2>Conclusion</h2>
      <p>As VR technology continues to advance and become more accessible, its role in B2B events is set to grow. By offering immersive, interactive experiences, VR is not just enhancing how businesses showcase their products and services; it's revolutionizing how they connect and communicate in the B2B world. As we move forward, the lines between physical and virtual events will continue to blur, opening up exciting new possibilities for engagement and innovation in the B2B space.</p>`,
      date: '2023-06-20',
      author: 'Alex Thompson',
      image: '/placeholder.svg?height=600&width=1200'
    },
  ]
  
  export async function getBlogPosts(): Promise<BlogPost[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    return blogPosts
  }
  
  export async function getBlogPost(id: string): Promise<BlogPost | undefined> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500))
    return blogPosts.find(post => post.id === id)
  }
  
  