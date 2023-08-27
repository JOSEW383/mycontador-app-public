import classes from "@/styles/MeasurerLoading.module.css";


export default function Loading() {
  return (
    <div className={classes.center}>
      <span className={classes.measurerLoader}></span>
    </div>
  );
}
