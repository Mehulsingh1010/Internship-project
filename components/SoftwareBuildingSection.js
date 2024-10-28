// components/SoftwareBuildingSection.js

import Image from "next/image";

const SoftwareBuildingSection = () => {
  return (
    <div className="bg-white pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl text-purple-600 font-semibold tracking-wide uppercase">
            Way of building
          </h2>
          <p className="mt-2 text-4xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Great Software
          </p>
        </div>

        {/* Main content */}
        <div className="lg:flex lg:items-center lg:space-x-10 p-2">
          {/* Text Section */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-gray-900">
              Build the right team to scale
            </h3>
            <p className="mt-4 text-gray-600">
              Finding the right talent is not easy. We help you find the talent
              that suits your needs, follows your processes, and sticks with you
              long term (not the case with freelancers).
            </p>
            <p className="mt-4 text-gray-600">
              Our{" "}
              <a href="#" className="text-purple-600 underline">
                delivery model
              </a>{" "}
              helps you cut costs and deliver within budget.
            </p>

            {/* Testimonial */}
            <div className="mt-8 bg-purple-50 p-4 rounded-md">
              <p className="text-pink-600 italic">
                &quot Simform is quick to identify larger problem with the
                Software so we decided to expand our scope to build new modules
                &quoat
              </p>
              <div className="flex items-center mt-4">
                <img
                  src="https://s3-alpha-sig.figma.com/img/b9ad/da40/9ebf32654a8f9b76dff8ea4c280bafca?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B63rTHYOC95g-2kWdy-oiBgHCjslov8WcidSavx1RKZ39C04d8F02bvcge9n4PEqnxrxs9bBIbTBhenQNwQXPXB~xSBrwDXqZ559CN8i7HT2UTVYs0hSRYNsvxTyOXM~vuVfKTnvB6E48uempsC0bnKM~QxAMnTSYMT5qDbU8aIfMrdgS7YnBzRDHlGFwkWG5h20j4gPGj0ElLbZnXyi6SxPKA2uM1MMGSPMTr2euetwu5tOAGV0Y8UboRUusgFA3nOWX7oqT5f-xsIScGRU~ci5xKQ21cljJC1Yg0yzonDZVUD1Eq~DMuQqlQlBGE1Ryw-yIrIXR-MrwO5Ldwsz2g__" // replace with actual avatar path
                  alt="Jeewa Markram"
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-3">
                  <p className="text-gray-900 font-medium">Jeewa Markram</p>
                  <p className="text-gray-500 text-sm">CEO</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="mt-10 lg:mt-0 lg:w-1/2">
            <img
              src="https://s3-alpha-sig.figma.com/img/a01b/38ad/f465e575afbd6e169245a71bdb4fb796?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Wz84-2qCb-snP4x3U-DDixh~nXTriFivYNyp9vRCAs3ylzXjYjHtrag2TlXeHtFPGmImGyfTmjUUAJmdbJF7K743T3p~Mahmn35deuojQTUWMSYOvKEHF9DeBnGZqenHyNi99EVNcQCKypNlYz-OD6iygPzHL16mk32Scl38SIErcWBXEFPSuWnahKRJPEKKw4Sru9xKcp~cXddjho9-baOX8bWQldo6Ep6XntITgA1XMxLp9qzfdKO1YUS-wjlNGRoBaHhdFauqtojbzC7niTOAYtwtQRX-dHhbK80yYaK3QjsAxV24Da2sVotio07zXeVJb3UCC036Q1yjGfIwIg__" // replace with actual image path
              alt="Team discussion"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwareBuildingSection;
