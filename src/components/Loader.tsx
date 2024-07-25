import Image from "next/image"

const Loader = () => {
  return (
    <div className="loader">
      <Image
        src="../../public/assets/icons/loader.svg"
        alt="loader"
        width={32}
        height={32}
        className="animate-spin"
      />
      <h1 className="text-xl">Loading</h1>
    </div>
  )
}

export default Loader