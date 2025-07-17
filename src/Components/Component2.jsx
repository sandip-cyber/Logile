const Component2 = () => {
  return (
    <div className="bg-white rounded-xl overflow-hidden border-2 border-black max-w-6xl  mx-auto mt-25 shadow-lg">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left side - background image + circular image */}
        <div className="relative bg-cover bg-center p-10 flex justify-center items-center"
          style={{
            backgroundImage: `url('https://www.logile.com/wp-content/uploads/2024/10/AdobeStock_772684493-1-e1729020470428.jpg')`,
          }}
        >
          <div className="w-60 h-60 rounded-full border-[10px] border-blue-600 overflow-hidden shadow-xl">
            <img
              src="https://www.logile.com/wp-content/uploads/2024/10/Connected-Workforce-Logile-Connect-1200x1200-1.jpg"
              alt="Logile Software on iPad"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right side - content */}
        <div className="bg-white p-6 md:p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-black mb-8">Proven Results</h2>

          <div className="space-y-6 border-l-4 border-black pl-6">
            <div>
              <strong className="text-orange-500 text-4xl font-extrabold block">~40%</strong>
              <p className="text-purple-900 text-lg">improvement in productivity</p>
            </div>

            <div>
              <strong className="text-pink-600 text-4xl font-extrabold block">25%</strong>
              <p className="text-purple-900 text-lg">reduction in overtime hours</p>
            </div>

            <div>
              <strong className="text-teal-600 text-4xl font-extrabold block">31%</strong>
              <p className="text-purple-900 text-lg">decrease in turnover</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component2;