import styles from './cvCard.module.scss';
import clsx from 'clsx';

const CvCardTwo = ({ obj, index, item, handleClickCard, infoIsVisible }) => {
	return (
		<>
		<h3>{item.title}</h3>
		<article className={styles.cardContainer} key={`${item.title}-${index}x`}>
		{	
		item.items.map((program, index) => (
			<article className={styles.cvItem} key={`${program}-${index}-${item.name}-${item.credits}`}>
				<article 
					onClick={program.degree ? () => handleClickCard(index, program.name, program.type) : null} 
					className={clsx(styles.cvCard, styles.third, {[styles.noHover]: program.credits === '30 HP'})} 
				>
					{program.degree && (
						<h3 
							className={clsx(styles.plus, {[styles.up]:infoIsVisible && infoIsVisible.showIndex === index && infoIsVisible.program === program.name && infoIsVisible.type === program.type })}
						>
							&#10507;
						</h3>
					)}
					{program.name &&  <h4>{program.name}</h4>}
					<span>{program.dates}</span>
					<p>{program.place}</p>
					<p>{program.credits}</p>
					{ infoIsVisible && infoIsVisible.showInfo && program.kurser ? (
						<div className={clsx(styles.hidden, {[styles.showHidden]: infoIsVisible.showIndex === index && infoIsVisible.program === program.name && infoIsVisible.type === program.type  })}>
							<ul> {program.kurser?.map((task) => (
								<li key={`task-${index}-${program.title}-${program.dates}-${obj.type}-${task}kkk`}>
									{task}
								</li>
							))}
							</ul>
						</div>
					) : null}
				</article>
			</article>
		))}	
	</article>
		</>
	);
};

export default CvCardTwo;