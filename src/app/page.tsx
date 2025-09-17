export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-blue-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Ласкаво просимо до Bus Starlink</h1>
          <p className="text-xl md:text-2xl">Інтернет у дорозі – залишайтеся на зв’язку в будь-якій точці!</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 flex-grow">
        {/* Intro Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-900 mb-4">Революція для мандрівників</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Bus Starlink – це новий рівень комфорту в подорожах! Наші автобуси оснащені супутниковим інтернетом Starlink від SpaceX, що забезпечує високошвидкісне та стабільне підключення навіть у найвіддаленіших куточках. Працюйте, дивіться фільми, спілкуйтеся з друзями – усе це прямо під час поїздки!
          </p>
        </section>

        {/* Why Choose Us */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-900 mb-6">Чому обирають Bus Starlink?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-700">Висока швидкість</h3>
              <p className="text-gray-600">До 350 Мбіт/с завдяки Starlink Gen3.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-700">Надійне покриття</h3>
              <p className="text-gray-600">Інтернет працює навіть у русі, у будь-якій точці маршруту.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-700">Підключення для всіх</h3>
              <p className="text-gray-600">До 235 пристроїв одночасно – вистачить для всіх пасажирів!</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-700">Проста авторизація</h3>
              <p className="text-gray-600">Підключіться до Wi-Fi, увійдіть і працюйте за секунди.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-700">Комфорт у дорозі</h3>
              <p className="text-gray-600">Перетворіть час у дорозі на продуктивний або розважальний досвід.</p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-900 mb-6">Як це працює?</h2>
          <ol className="list-decimal list-inside space-y-4 text-lg text-gray-700">
            <li><span className="font-semibold">Підключіться до Wi-Fi:</span> Знайдіть мережу Bus Starlink у салоні автобуса.</li>
            <li><span className="font-semibold">Авторизуйтесь:</span> Уведіть свої дані або зареєструйтесь у нашій системі.</li>
            <li><span className="font-semibold">Насолоджуйтесь інтернетом:</span> Працюйте, дивіться відео чи грайте онлайн без затримок!</li>
          </ol>
        </section>

        {/* Who We Are For */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-900 mb-6">Для кого ми?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-blue-700">Мандрівники</h3>
              <p className="text-gray-600">Залишайтеся на зв’язку з рідними або діліться враженнями в соцмережах.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-blue-700">Бізнес-пасажири</h3>
              <p className="text-gray-600">Відповідайте на листи, проводьте відеодзвінки або готуйтеся до зустрічей.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold text-blue-700">Студенти та школярі</h3>
              <p className="text-gray-600">Використовуйте час у дорозі для навчання чи розваг.</p>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-blue-900 mb-6">Технологія Starlink на борту</h2>
          <p className="text-lg text-gray-700 mb-4">Ми використовуємо найновішу версію супутникового інтернету Starlink Gen3:</p>
          <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
            <li>Покращена антена для стабільного з’єднання в русі.</li>
            <li>Низька затримка сигналу для комфортної роботи та ігор.</li>
            <li>Енергоефективне обладнання, інтегроване з бортовою системою автобуса.</li>
            <li>Захисний корпус антени, стійкий до будь-яких погодних умов.</li>
          </ul>
          <p className="text-sm text-gray-500 mt-4">Джерело: Onlink – Стабільний інтернет Starlink для автобусів</p>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-semibold text-blue-900 mb-6">Розпочніть подорож із Bus Starlink!</h2>
          <p className="text-lg text-gray-700 mb-6">
            Забронюйте квиток на автобус із інтернетом Starlink і відкрийте нові можливості в дорозі. Підключайтеся, працюйте, відпочивайте – із Bus Starlink ви завжди онлайн!
          </p>
          <div className="flex justify-center gap-4">
            <a href="#" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">Забронювати квиток</a>
            <a href="#" className="bg-gray-200 text-blue-900 px-6 py-3 rounded-lg hover:bg-gray-300 transition">Дізнатися більше про Starlink</a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Bus Starlink. Усі права захищено.</p>
        </div>
      </footer>
    </div>
  );
}