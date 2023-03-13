import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import './Counter.css';

export interface CounterProps {
    count: number
}

export const Counter = (props: CounterProps) => {
    const { count } = props;
    return (
      <div className="container__iconClick">
        <div className="icon__click">
          <InfoOutlinedIcon
            sx={{ color: '#35a1db' }}
          />
        </div>
        <span>
          {`Кликнули ${count}`}
        </span>
      </div>
    );
};
