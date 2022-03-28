import Layout from "../src/components/Layout";
import Video from "../src/components/Video";

export default function Home(props) {
  const { videoProps } = props;

  return (
    <Layout>
      <section className="mb-10">
        {videoProps.length > 0 &&
          videoProps.map((video) => <Video {...video} key={video.id} />)}
      </section>
      <section className="mx-auto grid content-center mx-6 sm:mx-24 mb-10">
        <h2 className="text-blackish justify-self-center">
          Ready to have your cake and eat it too?
        </h2>
        <p className="text-blueish max-w-5xl justify-self-center sm:text-center">
          Start by designing the experience you have in mind. We&#39;ll guide
          you through each step. If your experience meets the quality standards,
          you&#39;ll hear more about what&#39;s next.
        </p>
      </section>
    </Layout>
  );
}

const getVideoData = async () => {
  try {
    const resp = await fetch(
      "https://vimeo.com/api/v2/channel/staffpicks/videos.json"
    );

    return resp.json();
  } catch (err) {
    console.log(`Error getting videos: ${err}`);
  }
};

export async function getStaticProps(context) {
  const videoProps = await getVideoData();

  return {
    props: {
      videoProps: videoProps,
    },
  };
}
