import Card from '@/components/Card';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mb-8">Runon Assessment</h1>
      <div className="flex flex-wrap justify-center">
        <Card
          imageSrc="/money.png"
          title="Money Task"
          description="Implementation using useState"
          link="/money"
        />
        <Card
          imageSrc="/color.png"
          title="Color Picker"
          description="Color picker"
          link="/color"
        />
      </div>
    </div>
  );
}

export default Home;
