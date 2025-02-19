import styles from "./page.module.css";
import Form from "@/components/Form";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className="App">
        <div>
          <h2 className={styles.titulo}>
            Aquí gestionaremos nuestra lista de compras
          </h2><br></br>
          <Form></Form>
        </div>
      </div>
    </main>
  );
}