import Header from "./header";

const isAuth = false;


export default function CommonLayout({children}){
    return(
        <div className="min-h-screen bg-white">
          {isAuth && <Header/>}
          {children}
        
      </div>
    );

}