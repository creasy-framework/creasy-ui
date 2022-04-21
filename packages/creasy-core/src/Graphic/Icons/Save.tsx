/* tslint:disable:max-line-length */
import * as React from 'react';

export default ({ className = '' }: { className?: string }) => (
  <svg className={`creasy-icon ${className}`} viewBox="0 0 1070 1024">
    <path
      d="M896 0h-768C57.344 0 0 57.344 0 128v768C0 966.656 57.344 1024 128 1024h768c70.656 0 128-57.344 128-128v-768C1024 57.344 966.656 0 896 0z m-63.488 896H448.512V768H256v128h-64.512V704.512h640v191.488z m63.488-447.488c0 35.84-28.672 64.512-64.512 64.512H192.512c-35.84 0-64.512-28.672-64.512-64.512v-256c0-35.84 28.672-64.512 64.512-64.512h640c35.84 0 64.512 28.672 64.512 64.512v256z"
    ></path>
  </svg>
);
