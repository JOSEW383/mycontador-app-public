import classes from "@/styles/MeasurerLoading.module.css";


export default function MeasurerLoading() {
  return (
    <div className={classes.center}>
      <span className={classes.measurerLoader}></span>
    </div>
  );
}
