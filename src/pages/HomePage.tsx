import Mouse from "../components/Mouse/mouse";
import { SquareChevronDown } from "lucide-react";




function HomePage() {
  return (
    <>
      <main className="py-8 flex gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h1 className="text-2xl font-bold">Mouse Tester</h1>
          <p className="mt-3 text-lg leading-relaxed">Этот инструмент позволяет проверить работу мыши: нажимайте кнопки и крутите колёсико, а страница покажет, какие события возникают.</p>

          <h2 className="mt-2 text-xl font-bold">Что можно проверить</h2>
          <ul className="mt-2 space-y-0.5 pl-4 list-['–']">
            <li className="pl-2">Кнопки мыши: нажмите или отпустите любую кнопку, чтобы увидеть, срабатывает ли она.</li>
            <li className="pl-2">Колёсико мыши: прокрутите вверх или вниз, чтобы увидеть направление прокрутки.</li>
            <li className="pl-2">Двойной клик: быстро нажмите кнопку дважды и посмотрите, как мышь на это реагирует.</li>
          </ul>

          <h2 className="mt-6 text-xl font-bold">Как пользоваться</h2>
          <ol className="mt-2 list-decimal space-y-0.5 pl-6">
            <li className="pl-2">Наведите курсор на страницу.</li>
            <li className="pl-2">Нажимайте кнопки и крутите колёсико.</li>
            <li className="pl-2">Смотрите, как подсвечивается мышь рядом с текстом.</li>
          </ol>
        </div>
        <Mouse></Mouse>


      </main>
      <div className="bg-white rounded-2xl p-6 shadow-lg select-none">
        <h2 className="text-xl font-bold tracking-tight text-black sm:text-3xl mb-4">
          FAQ
        </h2>

        <details className="group py-4">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-gray-900 [&::-webkit-details-marker]:hidden">
            Какие кнопки мыши можно проверить?
            <SquareChevronDown
              size={22}
              className="shrink-0 transition-transform duration-200 group-open:rotate-180 group-open:text-indigo-600"
            />
          </summary>
          <p className="mt-3 leading-relaxed text-gray-700">
            Тестер позволяет проверить левую и правую кнопки, нажатие на колёсико,
            боковые кнопки «Назад» и «Вперёд», а также прокрутку колёсика вверх и вниз.
            При распознавании события соответствующая часть схемы мыши подсвечивается.
          </p>
        </details>

        <details className="group py-4">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-gray-900 [&::-webkit-details-marker]:hidden">
            Кнопка не срабатывает или срабатывает не всегда
            <SquareChevronDown
              size={22}
              className="shrink-0 transition-transform duration-200 group-open:rotate-180 group-open:text-indigo-600"
            />
          </summary>
          <p className="mt-3 leading-relaxed text-gray-700">
            Firefox может перехватывать нажатия боковых кнопок для перехода назад и вперёд
            по истории браузера. Из-за этого страница может не получать события этих кнопок.
            Для проверки боковых кнопок рекомендуется использовать Google Chrome.
          </p>
        </details>

        <details className="group py-4">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-gray-900 [&::-webkit-details-marker]:hidden">
            Чем нажатие на колёсико отличается от прокрутки?
            <SquareChevronDown
              size={22}
              className="shrink-0 transition-transform duration-200 group-open:rotate-180 group-open:text-indigo-600"
            />
          </summary>
          <p className="mt-3 leading-relaxed text-gray-700">
            Нажатие на колёсико работает как нажатие средней кнопки мыши: оно регистрирует
            нажатие и отпускание. Прокрутка вверх и вниз — отдельное действие, которое
            определяется по событию wheel. Тестер проверяет эти действия независимо друг от друга.
          </p>
        </details>

        <details className="group py-4">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-gray-900 [&::-webkit-details-marker]:hidden">
            Почему кнопка не подсвечивается?
            <SquareChevronDown
              size={22}
              className="shrink-0 transition-transform duration-200 group-open:rotate-180 group-open:text-indigo-600"
            />
          </summary>
          <p className="mt-3 leading-relaxed text-gray-700">
            Подсветка появляется, когда браузер передаёт тестеру соответствующее событие мыши.
            Некоторые браузеры могут перехватывать отдельные кнопки для собственных действий,
            поэтому не все кнопки обязательно будут доступны для проверки в каждом браузере.
          </p>
        </details>

      </div>
    </>
  );
}

export default HomePage;