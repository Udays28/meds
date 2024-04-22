
const Popup = () => {
  return (
    <div>
  <section className="fixed max-w-md p-4 mx-auto bg-white border border-gray-200       :bg-gray-800 right-8 bottom-8       :border-gray-700 rounded-2xl">
  <h2 className="font-semibold text-gray-800       :text-white">🍪 Cookie Notice</h2>
  <p className="mt-4 text-sm text-gray-600       :text-gray-300">We use cookies to ensure that we give you the best experience on our website. <a href="#" className="text-purple-500 hover:underline">Read cookies policies</a>. </p>
  <div className="flex items-center justify-between mt-4 gap-x-4 shrink-0">
    <button className="text-xs text-gray-800 underline transition-colors duration-300       :text-white       :hover:text-gray-400 hover:text-gray-600 focus:outline-none">
      Manage your preferences
    </button>
    <button className=" text-xs bg-purple-700 font-medium rounded-lg hover:bg-gray-700 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none">
      Accept
    </button>
  </div>
</section>

    </div>
  )
}

export default Popup
