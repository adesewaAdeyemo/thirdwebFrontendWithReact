import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";
import AddContact from "../component/addInfo";

const Home: NextPage = () => {
  const address = useAddress();

let num = 1;

function SetNumTo(i){
  num = i;
}
  return (
    <main className={styles.main}>
        <div className="container" id="dyna">
          <div className="card px-4 py-2">
            <div className="card-body">
              <div className="d-flex justify-space-between mb-2">
                <div className="col-9">
                  <h3 className="mx-0">User Information</h3>
                </div>
                <div className={`${styles.connect}`}>
                  <ConnectWallet />
                </div>
              </div>

              <p className="card-text mb-5">
                Hello, You have been normalised to identify someone. Tap "Next"
                to continue with the identification process
              </p>
              <div>
                {/* <button
                  type="submit"
                  form="formA"
                  className="btn btn-lg btn-dark btn-block col-12 mt-5"
                  onClick={()=> {
                    SetNumTo('2')
                  }}
                >
                  Next
                </button> */}
                <AddContact />
              </div>
              <hr></hr>

              {address && (
                <div className="row">
                  <div className="col-8">
                    <h4 className="mx-0">Contacts</h4>
                  </div>
                  <div className={`${styles.connect} col-4`}></div>
                </div>
              )}
            </div>
          </div>
        </div>
    </main>
  );
};

export default Home;
