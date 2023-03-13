import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';

import "./ServerResponce.css";

interface ServerResponce {
    responce: number
    error: string
}

export const ServerResponces = (props: ServerResponce) => {
    const { responce, error } = props;

  return (
    <div className="container__value">
      <div className="icon__value">
        <WarningAmberOutlinedIcon
          sx={{ color: '#FBCC53' }}
        />
      </div>
      <span>
        {error ? `${error}` : `По версии сервера: ${responce}`}
      </span>
    </div>
    );
};
