import { Header } from "../../components/header";
import {Outlet} from 'react-router-dom';

export function MainLayout(){
  return(
    <div>
      <Header />
      <section>
        <Outlet />
      </section>
    </div>
  )
}
